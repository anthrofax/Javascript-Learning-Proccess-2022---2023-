import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _openButton = document.querySelector('.nav__btn');
  _closeButton = document.querySelector('.btn--close-modal');
  _overlay = document.querySelector('.overlay');

  _successMessage = 'Yayy, resep kamu telah berhasil diupload 🥳';

  constructor() {
    super();
    this._openAddRecipeModal();
    this._closeAddRecipeModal();
  }

  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _openAddRecipeModal() {
    this._openButton.addEventListener('click', this.toggleWindow.bind(this));
  }

  _closeAddRecipeModal() {
    this._closeButton.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = [...new FormData(this)];
      const realData = Object.fromEntries(data);

      handler(realData);
    });
  }
}

export default new AddRecipeView();
