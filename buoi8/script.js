// let n = 6;
// console.log("Bảng cửu chương của số", n);

// for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
// }


// let i = 1;
// let y = 100;
// let tong = 0;

// while (i <= y) {
//     tong += i;
//     i++;
// }

// console.log("Tổng các số từ 1 đến",y ,"=", tong);


// function greet(name) {
//   console.log("Xin chào " + name);
// }

// greet("cương"); 


// function add(a, b) {
//   console.log("Tổng là:", a + b);
//   console.log("hiệu là:", a - b);
//   console.log("tích là:", a * b);
//   console.log("thương là:", a / b);
// }

// add(10, 9); 


let hello = function() {
    console.log("Xin chào học viên!");
};

hello();
hello();



let nhanDoi = (x) => x * 2;


let kiemTraChanLe = (n) => {
    if (n % 2 === 0) {
        return "Chẵn";
    } else {
        return "Lẻ";
    }
};


console.log("nhanDoi(5) =", nhanDoi(5));           
console.log("kiemTraChanLe(4) =", kiemTraChanLe(4)); 
console.log("kiemTraChanLe(7) =", kiemTraChanLe(7)); 
