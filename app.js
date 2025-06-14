const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 }
];

let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderProducts() {
  const productSection = document.getElementById('products');
  productSection.innerHTML = '';
  products.forEach(p => {
    productSection.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>`;
  });
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const total = document.getElementById('total');
  cartItems.innerHTML = '';
  let sum = 0;
  cart.forEach(p => {
    cartItems.innerHTML += `<li>${p.name} - $${p.price}</li>`;
    sum += p.price;
  });
  total.textContent = sum.toFixed(2);
}

renderProducts();
