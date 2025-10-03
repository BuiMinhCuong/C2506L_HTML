let student = {
  name: "Nguyen Van A",
  age: 20,
  gender: "male",
  scores: {
    math: 8,
    english: 7,
    science: 9
  }
};

console.log("Tên:", student.name);
console.log("Tuổi:", student.age);

let tong = student.scores.math + student.scores.english + student.scores.science;
let trungBinh = tong / 3;
console.log("Điểm trung bình:", trungBinh);



student.address = "Ha Noi";
console.log("thêm address:", student);

delete student.gender;
console.log(" xóa gender:", student);
