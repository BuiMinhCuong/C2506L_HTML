function sayHello() {
  alert("Hello from external JS!");
}

var x = 1;
{
  var x = 2;
  console.log(x); // ?
}
console.log(x); // ?

let y = 1;
{
  let y = 2;
  console.log(y); // ?
}
console.log(y); // ?


// 1. Khai báo các biến tương ứng với các kiểu dữ liệu
let myName = "Lan";
let myAge = 20;
let isStudent = true;
let emptyValue = null;
let unknownValue;

// 2. In kiểu dữ liệu từng biến ra console
console.log(typeof myName);      // ?
console.log(typeof myAge);       // ?
console.log(typeof isStudent);   // ?
console.log(typeof emptyValue);  // ?
console.log(typeof unknownValue); // ?














