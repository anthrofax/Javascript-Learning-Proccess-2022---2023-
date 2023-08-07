import {
  API_URL,
  RESULT_PER_PAGE,
  DEFAULT_INIT_OPENED_PAGE,
  API_KEY,
} from './configuration';
import { AJAX } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: [],
    results: [],
    page: DEFAULT_INIT_OPENED_PAGE,
    resultsPerPage: RESULT_PER_PAGE,
  },
  bookmark: [],
};

const createRecipeObject = function (recipeData) {
  const { recipe } = recipeData.data;
  // console.log(recipe);

  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (hashTarget) {
  try {
    const data = await AJAX(`${API_URL}/${hashTarget}?key=${API_KEY}`);

    createRecipeObject(data);

    state.recipe.bookmarked = state.bookmark.some(
      bookmark => bookmark.id === state.recipe.id //jonas use hashTarget
    )
      ? true
      : false;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
    const { recipes } = data.data;

    if (!recipes || (Array.isArray(recipes) && recipes.length === 0))
      throw new Error();

    state.search.results = recipes.map(rec => {
      return (rec = {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      });
    });
    state.search.page = DEFAULT_INIT_OPENED_PAGE;
  } catch (err) {
    throw err;
  }
};

export const getResultPerPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const getServings = function (newServing = 1) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServing) / state.recipe.servings;
  });

  state.recipe.servings = newServing;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmark));
};

export const addBookmark = function (recipe) {
  state.bookmark.push(recipe);

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmark.findIndex(bookmark => bookmark.id === id);
  state.bookmark.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  // state.bookmark = JSON.parse(localStorage.getItem('bookmarks'));

  // Tidak bisa langsung ditulisakan seperti di atas, karena akan menyebabkan state.bookmark berubah menjadi null, karena localStorage yang belum terisi nilai nya akan mengembalikan nilai null, sehingga bentuk dari state.bookmark tidak dalam berupa array lagi dan akan terjadi error nantinya, misalnya penggunaan method array some pada function loadRecipe di atas

  // Oleh karena itu, sebaiknya kita simpan terlebih dahulu nilai dari storage bookmarks, kalau nilai nya ada (dalam bentuk array pastinya), baru kita masukkan nilai nya ke dalam state.bookmark
  const storage = JSON.parse(localStorage.getItem('bookmarks'));
  if (storage) state.bookmark = storage;
};

init();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(ing => ing[0].startsWith('ingredient') && ing[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',');
        if (ingArr.length !== 3)
          throw new Error(
            `Format yang anda tulis salah, silahkan coba lagi dengan format yang sesuai.`
          );

        // My Way
        // return {
        //   quantity: quantity ? +ing[0] : null,
        //   unit: ing[1],
        //   description: ing[2],
        // };

        const [quantityData, unit, description] = ingArr;

        return {
          quantity: quantityData ? +ingArr[0] : null,
          unit,
          description,
        };
      });

    const recipe = {
      cooking_time: newRecipe.cookingTime,
      image_url: newRecipe.image,
      ingredients,
      publisher: newRecipe.publisher,
      servings: newRecipe.servings,
      source_url: newRecipe.sourceUrl,
      title: newRecipe.title,
    };

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    createRecipeObject(data);

    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

// const clearStorage = function () {
//   localStorage.clear('bookmarks');
// };
// clearStorage();
