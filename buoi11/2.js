const numbers = [1, 2, 3, 4, 5];


let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Tổng các phần tử:", sum);

numbers.forEach((value, index) => {
  console.log(`Phần tử ở chỉ số ${index} là ${value}`);
});