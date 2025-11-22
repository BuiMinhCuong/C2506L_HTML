const nhapCongViec = document.getElementById("nhapCongViec");
 const nutThem = document.getElementById("nutThem");
  const danhSachCongViec = document.getElementById("danhSachCongViec");

nutThem.addEventListener("click", function () {
    const text = nhapCongViec.value.trim();

    if (text === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    const li = document.createElement("li");
    li.className = "cong-viec";

    const span = document.createElement("span");
     span.className = "noi-dung";
       span.textContent = text;

    const btnHoanThanh = document.createElement("button");
     btnHoanThanh.className = "nut hoan-thanh";
       btnHoanThanh.textContent = "Hoàn thành";
         btnHoanThanh.addEventListener("click", function () {
          span.classList.toggle("da-hoan-thanh");
    });

    const btnXoa = document.createElement("button");
     btnXoa.className = "nut xoa";
      btnXoa.textContent = "Xóa";
         btnXoa.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
      li.appendChild(btnHoanThanh);
        li.appendChild(btnXoa);
 
    danhSachCongViec.appendChild(li);

    nhapCongViec.value = "";
    nhapCongViec.focus();
});
