import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search');
  #inputField = document.querySelector('.search__field');

  #clearInput() {
    this.#inputField.value = '';
  }

  getQuery() {
    const inputValue = this.#inputField.value;
    this.#clearInput();
    return inputValue;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
