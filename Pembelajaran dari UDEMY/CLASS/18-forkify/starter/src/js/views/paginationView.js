import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkupNextButton() {
    return `
    <button data-goto="${
      this._recievedData.page + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${this._recievedData.page + 1}</span>
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
    </svg>
 </button> 
    `;
  }

  _generateMarkupPrevButton() {
    return `
    <button data-goto="${
      this._recievedData.page - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._recievedData.page - 1}</span>
    </button>
    `;
  }

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');

      if (!button) return;
      //   console.log(+button.dataset.goto);
      handler(+button.dataset.goto);
    });
  }

  _generateMarkup() {
    const curPage = this._recievedData.page;
    const numPages = Math.ceil(
      this._recievedData.results.length / this._recievedData.resultsPerPage
    );

    // Halaman pertama
    if (curPage === 1 && numPages != 1) {
      return this._generateMarkupNextButton();
    }

    // Halaman terakhir
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupPrevButton();
    }

    // Pertengahan halaman
    if (curPage < numPages && curPage !== 1) {
      console.log(this._recievedData.page, numPages);
      return `
        ${this._generateMarkupPrevButton()}
        ${this._generateMarkupNextButton()}
        `;
    }

    // Hanya 1 halaman
    return ``;
  }
}

export default new PaginationView();
