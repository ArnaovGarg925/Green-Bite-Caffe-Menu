const dishes = [
  { name: 'Paneer Butter Masala', price: 220, desc: 'Creamy and rich paneer delight.', img: 'paneer.jpg', category: 'North' },
  { name: 'Veg Biryani', price: 180, desc: 'Fragrant rice with veggies and spices.', img: 'biryani.jpg', category: 'North' },
  { name: 'Masala Dosa', price: 130, desc: 'Crispy dosa with flavorful masala.', img: 'dosa.jpg', category: 'South' },
  { name: 'Spring Rolls ⭐', price: 110, desc: 'Crispy rolls stuffed with vegetables.', img: 'springroll.jpg', category: 'Chinese' },
  { name: 'Veg Manchurian ⭐', price: 160, desc: 'Crispy veggie balls in Indo-Chinese sauce.', img: 'manchurian.jpg', category: 'Chinese' },
  { name: 'Dal Tadka', price: 110, desc: 'Lentils tempered with ghee and spices.', img: 'dal.jpg', category: 'North' },
  { name: 'Idli Sambhar', price: 100, desc: 'Soft idlis with hot sambhar.', img: 'idli.jpg', category: 'South' },
  { name: 'Rajma Chawal', price: 130, desc: 'Kidney beans curry with basmati rice.', img: 'rajma.jpg', category: 'North' }
];

let cart = {};
const menu = document.getElementById('menu');
const cartDisplay = document.getElementById('cart-summary');
const cartItems = document.getElementById('cart-items');
const checkoutBar = document.getElementById('checkout-bar');

function renderCart() {
  let total = 0;
  let items = '';
  for (let item in cart) {
    total += cart[item].price * cart[item].qty;
    items += `<div class="cart-item">
                <span>${item}</span>
                <button onclick="decreaseQty('${item}')">−</button>
                <span>${cart[item].qty}</span>
                <button onclick="increaseQty('${item}')">+</button>
                <span>₹${cart[item].
