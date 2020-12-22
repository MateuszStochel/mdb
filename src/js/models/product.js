export const getAll = function () {
  return JSON.parse(localStorage.getItem('products')) || [];
};

export const add = function (formObj) {
  let currentProducts = JSON.parse(localStorage.getItem('products')) || [];
  currentProducts.push(formObj);

  localStorage.setItem('products', JSON.stringify(currentProducts));
};

export const remove = function (id) {
  const currentProducts = JSON.parse(localStorage.getItem('products'));

  const updatedProducts = currentProducts.filter((product) => product.id !== id);

  localStorage.setItem('products', JSON.stringify(updatedProducts));
};
