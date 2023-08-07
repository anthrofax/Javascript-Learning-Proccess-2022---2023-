import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { SECOND_TIMEOUT_CLOSE_FORM } from './configuration.js';

import 'regenerator-runtime/runtime'; //Polyfilling async await
import 'core-js/stable'; //Polyfilling everything else
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1. Loading Recipe
    await model.loadRecipe(id);

    // 2. Mark Selected Recipe
    resultView.update(model.getResultPerPage());

    // 3. Rendering the recipe
    recipeView.render(model.state.recipe);

    // 4. Render Saved Bookmarks
    if (model.state.bookmark.length === 0) return bookmarksView.renderError();
    bookmarksView.render(model.state.bookmark);

    // 5. Mark Selected Bookmark
    bookmarksView.update(model.state.bookmark);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    // 1. Get Query
    const query = searchView.getQuery();
    resultView.renderSpinner();

    // 2. Loading Search
    await model.loadSearchResults(query);

    // 3. Render Result
    resultView.render(model.getResultPerPage());

    // 4. Render Pagination Button
    paginationView.render(model.state.search);
  } catch (err) {
    resultView.renderError();
    console.log(err);
  }
};

const controlPagination = function (goto) {
  // 1. Render NEW Result
  resultView.render(model.getResultPerPage(goto));

  // 2. Render NEW Pagination Button
  paginationView.render(model.state.search);
};

const controlServings = function (updateTo) {
  // 1. Update Servings
  model.getServings(updateTo);

  // 2. Re render the upadated view
  // recipeView.render(model.state.recipe);

  // 2. Update the view
  recipeView.update(model.state.recipe);

  if (updateTo === 1)
    document.querySelector('.btn--decrease-servings').style.opacity = 0.5;
};

const controlBookmarks = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);

  if (model.state.bookmark.length === 0) return bookmarksView.renderError();

  bookmarksView.render(model.state.bookmark);
};

const controlAddRecipe = async function (recipe) {
  try {
    // Show Loading Spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(recipe);

    // Update Bookmark View
    bookmarksView.render(model.state.bookmark);

    // Upload Success Upload Message
    addRecipeView.renderMessage();

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close Add Recipe Form
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, SECOND_TIMEOUT_CLOSE_FORM * 1000);

    // Render Uploaded Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    addRecipeView.renderError(err);
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmarks);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerPagination(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
