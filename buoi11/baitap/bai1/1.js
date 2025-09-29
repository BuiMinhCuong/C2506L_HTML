const students = [
  { name: "An", age: 20 },
  { name: "Bình", age: 21 },
  { name: "Châu", age: 20 },
  { name: "Dũng", age: 22 }
];

const grouped = {};

students.forEach(student => {
  const age = student.age;
  if (!grouped[age]) {
    grouped[age] = [];
  }
  grouped[age].push(student.name);
});

console.log("Kết quả gom nhóm theo tuổi:");
console.log(grouped);
