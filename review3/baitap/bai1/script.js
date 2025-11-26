const formProduct = document.getElementById("form-product");
const productList = document.getElementById("product-list");
let products = [];

formProduct.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    products.push({ name, price });
    renderProducts();
    formProduct.reset();
};

function renderProducts() {
    productList.innerHTML = "";
    products.forEach((product, i) => {
        productList.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><button onclick="deleteProduct(${i})">Xóa</button></td>
            </tr>
        `;
    });
}

function deleteProduct(i) {
    products.splice(i, 1);
    renderProducts();
}
