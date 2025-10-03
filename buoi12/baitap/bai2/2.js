let products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 }
];

function getProductById(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null; 
}

console.log(getProductById(2));

function getTotalPrice() {
  let tong = 0;
  for (let i = 0; i < products.length; i++) {
    tong = tong + products[i].price;
  }
  return tong;
}
console.log("Tổng giá:", getTotalPrice());

products.push({ id: 4, 
                name: "Headphone", 
                price: 200 });

console.log("thêm sản phẩm:", products);

console.log("giá > 700:");
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 700) {
    console.log(products[i].name);
  }
}
