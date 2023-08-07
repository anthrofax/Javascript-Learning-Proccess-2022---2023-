// MY WAY
// import View from './View.js';
// import previewView from './previewView.js';

// class BookmarksView extends View {
//   _parentElement = document.querySelector('.bookmarks__list');
//   _errorMessage = `Bookmark masih kosong. Lakukan bookmark pada salah satu resep untuk menyimpan disini.`;

//   _generateMarkup() {
//     return this._recievedData
//       .map(previewView.markupPerRecipe.bind(this))
//       .join('');
//   }
// }

// export default new BookmarksView();

import View from './View.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `Bookmark masih kosong. Lakukan bookmark pada salah satu resep untuk menyimpan disini.`;

  _generateMarkup() {
    return this._recievedData
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
