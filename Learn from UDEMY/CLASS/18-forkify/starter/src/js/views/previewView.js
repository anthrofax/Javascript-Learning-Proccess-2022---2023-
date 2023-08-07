import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
            <li class="preview">
                    <a class="preview__link ${
                      id === this._recievedData.id
                        ? 'preview__link--active'
                        : ''
                    }" href="#${this._recievedData.id}">
                        <figure class="preview__fig">
                            <img src="${this._recievedData.image}" alt="${
      this._recievedData.title
    }"/>
                        </figure>
                        <div class="preview__data">
                            <h4 class="preview__title">${
                              this._recievedData.title
                            }</h4>
                            <p class="preview__publisher">${
                              this._recievedData.publisher
                            }</p>
                            <div class="preview__user-generated ${
                              this._recievedData.key ? '' : 'hidden'
                            }">
                                <svg>
                                <use href="${icons}#icon-user"></use>
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
            `;
  }
}

export default new PreviewView();
