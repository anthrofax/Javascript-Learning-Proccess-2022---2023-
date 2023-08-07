// MY WAY
// import View from './View.js';
// import previewView from './previewView.js';

// class ResultView extends View {
//   _parentElement = document.querySelector('.results');
//   _errorMessage = `Resep yang anda cari tidak tersedia.`;

//   _generateMarkup() {
//     return this._recievedData
//       .map(previewView.markupPerRecipe.bind(this))
//       .join('');
//   }
// }

// export default new ResultView();

import View from './View.js';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `Resep yang anda cari tidak tersedia.`;

  _generateMarkup() {
    return this._recievedData
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultView();
