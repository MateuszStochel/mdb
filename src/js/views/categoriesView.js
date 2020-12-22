import categoryView from './categoryView';

class CategoriesView {
  parentElement = document.querySelector('#categories-container');

  render(data) {
    const markup = this.generateMarkup(data);
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  generateMarkup(data) {
    return data.map((result) => categoryView.generateMarkup(result)).join('');
  }

  clear() {
    this.parentElement.innerHTML = '';
  }
}

export default new CategoriesView();
