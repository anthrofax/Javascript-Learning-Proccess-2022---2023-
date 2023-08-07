import { mark } from 'regenerator-runtime';
import icons from 'url:../../img/icons.svg';
export default class View {
  _recievedData;
  #clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const spinnerMarkup = `
      <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div> 
      `;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', spinnerMarkup);
  }

  renderMessage(msg = this._successMessage) {
    const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-smile"></use>
        </svg>
      </div>
      <p>${msg}</p>
    </div>

    `;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(msg = this._errorMessage) {
    const markup = `
      <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${msg}</p>
            </div>
      `;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  render(data, render = true) {
    // Jonas' way
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();
    this._recievedData = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._recievedData = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, index) => {
      const curEl = curElements[index];

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      )
        curEl.textContent = newEl.textContent;

      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }
}
