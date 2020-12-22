import productView from './productView';

class CategoryView {
  generateMarkup(data) {
    return `
      <div>
        <h2>${data.name}(${data.products.length})</h2>
        <div class="sub-categories">
          <span>Product</span> <span>Amount</span> <span>Delete</span>
        </div>
        <ul id=${data.name}>
          ${data.products.map((result) => productView.generateMarkup(result)).join('')}
        </ul>
      </div>
    `;
  }
}

export default new CategoryView();
