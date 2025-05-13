const cart = {};
function addToCart(productName) {
  if (cart[productName]) {
    cart[productName]++;
  } else {
    cart[productName] = 1;
  }
  updateCartDisplay();
}
function updateCartDisplay() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';

  for (const product in cart) {
    const quantity = cart[product];
    const listItem = document.createElement('li');
    listItem.textContent = `${product} x ${quantity}`;
    cartList.appendChild(listItem);
  }
}