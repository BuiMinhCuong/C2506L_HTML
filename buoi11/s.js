// let nums = [5, 3, 9, 1];

// nums.unshift(7);
// nums.pop();
// nums.splice(1,1);

// console.log(nums);

// const users = [
//   { 
//     name: 'An', 
//     age: 22 
// },

//   { 
//     name: 'Bình', 
//     age: 30 
// },
// ];
// const result = users.find(user => user.age > 5);
// console.log(result); 


const numbers = [1, 2, 3, 4, 5];

const chia = numbers.filter(n => n % 2 === 0);
console.log( chia);

const doubled = chia.map(n => n * 2);
console.log( doubled);

const sum = doubled.reduce((total, num) => total + num, 0);
console.log( sum);














