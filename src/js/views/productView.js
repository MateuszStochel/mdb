class ProductView {
  generateMarkup(data) {
    return `
      <li>
        <span>
          ${data.name}
        </span> 
        <span>
          ${data.amount}${data.by_weight ? 'kg' : 'szt'}
        </span>
        <button data-product-id=${data.id} data-remove-button=true>
          <i class="fas fa-times"></i>
        </button>
      </li>`;
  }
}

export default new ProductView();
