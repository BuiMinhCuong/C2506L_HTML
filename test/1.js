const form = document.getElementById("productForm");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const descInput = document.getElementById("desc");
const productList = document.getElementById("productList");
const submitBtn = document.getElementById("submitBtn");
const totalValue = document.getElementById("totalValue");
const searchInput = document.getElementById("search");

let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = -1;

// Hiển thị danh sách sản phẩm
function renderProducts(data = products) {
  productList.innerHTML = "";
  let total = 0;

  data.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.price.toLocaleString()} VND</td>
      <td>${p.quantity}</td>
      <td>${p.desc || ""}</td>
      <td>${(p.price * p.quantity).toLocaleString()} VND</td>
      <td>
        <button class="action-btn edit" onclick="editProduct(${index})">Sửa</button>
        <button class="action-btn delete" onclick="deleteProduct(${index})">Xóa</button>
      </td>
    `;
    productList.appendChild(tr);
    total += p.price * p.quantity;
  });

  totalValue.textContent = `Tổng giá trị tồn kho: ${total.toLocaleString()} VND`;
  localStorage.setItem("products", JSON.stringify(products));
}

// Thêm hoặc cập nhật sản phẩm
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);
  const desc = descInput.value.trim();

  if (!name || price <= 0 || quantity < 0) {
    alert("Vui lòng nhập thông tin hợp lệ!");
    return;
  }

  const product = { name, price, quantity, desc };

  if (editIndex === -1) {
    products.push(product);
  } else {
    products[editIndex] = product;
    editIndex = -1;
    submitBtn.textContent = "Thêm";
  }

  form.reset();
  renderProducts();
});

// Sửa sản phẩm
function editProduct(index) {
  const p = products[index];
  nameInput.value = p.name;
  priceInput.value = p.price;
  quantityInput.value = p.quantity;
  descInput.value = p.desc;
  submitBtn.textContent = "Cập nhật";
  editIndex = index;
}

// Xóa sản phẩm
function deleteProduct(index) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
    products.splice(index, 1);
    renderProducts();
  }
}

// Tìm kiếm theo tên
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});

// Lần đầu load
renderProducts();
