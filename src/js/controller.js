import * as product from './models/product.js';
import * as category from './models/category.js';
import categoriesView from './views/categoriesView';
import uniqid from 'uniqid';

const getAll = function () {
  const categories = category.getAllCategories();
  const products = product.getAll();

  const groupedProducts = groupedProductsByCategory(products, categories);
  categoriesView.render(groupedProducts);

  bindRemoveActions();
};

const bindRemoveActions = function () {
  const removeButtons = [...document.querySelectorAll('*[data-remove-button=true]')];

  removeButtons.forEach((button) =>
    button.addEventListener('click', function (e) {
      product.remove(e.currentTarget.attributes['data-product-id'].value);

      getAll();
    })
  );
};

const addProduct = function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(this)];

  // set by_weight value as false if unchecked
  let dataObject = Object.fromEntries(dataArr);
  dataObject['by_weight'] = Boolean(dataObject['by_weight']);

  product.add({ ...dataObject, id: uniqid() });
  getAll();
};

const groupedProductsByCategory = function (products, categories) {
  // need to group products by categories to reduce n*n
  const groupProducts = products.reduce((groupedValues, product) => {
    const value = product['category'];
    groupedValues[value] = (groupedValues[value] || []).concat(product);

    return groupedValues;
  }, {});

  return categories.map((category) => ({
    id: category.id,
    name: category.name,
    products: groupProducts[category.id] || [],
  }));
};

const bindEvents = function () {
  document.getElementById('add-form').addEventListener('submit', addProduct);
};

bindEvents();

getAll();
