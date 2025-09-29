const numbers = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];

let count = {}; 

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];

  if (count[num] === undefined) {
    count[num] = 1;
  } else {
    count[num] = count[num] + 1;
  }
}


console.log("Số lần xuất hiện của từng phần tử:");
for (let key in count) {
  console.log(key + " xuất hiện " + count[key] + " lần");
}
