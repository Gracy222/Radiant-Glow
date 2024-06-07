// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product');

        products.forEach(product => {
            const name = product.getAttribute('data-name').toLowerCase();
            if (name.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
