
let count = 0;
  const btn = document.getElementById("btn");
  const res = document.getElementById("result");

  btn.addEventListener("click", () => {
    count++;
    res.textContent = "Số lần: " + count;
  });