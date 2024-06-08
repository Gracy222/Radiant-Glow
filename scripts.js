document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display the response message
    document.getElementById("responseMessage").style.display = "block";

    // Optionally, you can clear the form fields after submission
    document.getElementById("contactForm").reset();
});
document.addEventListener('DOMContentLoaded', function () {
    const consultationForm = document.getElementById('consultationForm');
    const responseMessage = document.getElementById('responseMessage');

    consultationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulate form submission
        setTimeout(function () {
            responseMessage.style.display = 'block';
        }, 500);
    });
});
// JavaScript (scripts.js)

const cartLink = document.getElementById('cartLink');
const cartList = document.getElementById('cartList');
const addToCartButtons = document.querySelectorAll('.addToCartBtn');

let cartItems = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);
        cartItems.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartLink.textContent = `Shopping Cart (${cartItems.length})`;
    renderCartList();
}

function renderCartList() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function printReceipt() {
    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write('<html><head><title>Receipt</title></head><body>');
    receiptWindow.document.write('<h1>Receipt</h1>');
    receiptWindow.document.write('<ul>');
    cartItems.forEach(item => {
        receiptWindow.document.write(`<li>${item.name} - $${item.price.toFixed(2)}</li>`);
    });
    receiptWindow.document.write('</ul>');
    receiptWindow.document.write(`<p>Total: $${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>`);
    receiptWindow.document.write('</body></html>');
    receiptWindow.document.close();
    receiptWindow.print();
}
