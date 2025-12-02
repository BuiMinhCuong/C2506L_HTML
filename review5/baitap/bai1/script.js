let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
    const table = document.getElementById("productTable");
    table.innerHTML = "";

    products.forEach((p, i) => {
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>
                    <button class="action-btn" onclick="deleteProduct(${i})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

document.getElementById("productForm").onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;

    products.push({ name, price });
    localStorage.setItem("products", JSON.stringify(products));

    renderProducts();
    this.reset();
};

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}

renderProducts();
