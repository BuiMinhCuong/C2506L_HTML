// Lấy các phần tử HTML
const formSanPham = document.getElementById("formSanPham");
const oTen = document.getElementById("ten");
const oGia = document.getElementById("gia");
const oSoLuong = document.getElementById("soLuong");
const oMoTa = document.getElementById("moTa");
const bangSanPham = document.getElementById("danhSachSanPham");
const nutXacNhan = document.getElementById("nutXacNhan");
const tongGiaTri = document.getElementById("tongGiaTri");
const oTimKiem = document.getElementById("timKiem");

// Dữ liệu
let danhSachSanPham = JSON.parse(localStorage.getItem("danhSachSanPham")) || [];
let viTriDangSua = -1;

// Hàm hiển thị danh sách
function hienThiSanPham(danhSach = danhSachSanPham) {
  bangSanPham.innerHTML = "";
  let tong = 0;

  danhSach.forEach((sp, i) => {
    const hang = document.createElement("tr");
    hang.innerHTML = `
      <td>${sp.ten}</td>
      <td>${sp.gia.toLocaleString()} VND</td>
      <td>${sp.soLuong}</td>
      <td>${sp.moTa || ""}</td>
      <td>${(sp.gia * sp.soLuong).toLocaleString()} VND</td>
      <td>
        <button class="nut-hanh-dong sua" onclick="suaSanPham(${i})">Sửa</button>
        <button class="nut-hanh-dong xoa" onclick="xoaSanPham(${i})">Xóa</button>
      </td>
    `;
    bangSanPham.appendChild(hang);
    tong += sp.gia * sp.soLuong;
  });

  tongGiaTri.textContent = `Tổng giá trị tồn kho: ${tong.toLocaleString()} VND`;
  localStorage.setItem("danhSachSanPham", JSON.stringify(danhSachSanPham));
}

// Xử lý khi nhấn nút thêm / cập nhật
formSanPham.addEventListener("submit", (e) => {
  e.preventDefault();

  const ten = oTen.value.trim();
  const gia = Number(oGia.value);
  const soLuong = Number(oSoLuong.value);
  const moTa = oMoTa.value.trim();

  if (!ten || gia <= 0 || soLuong < 0) {
    alert("Vui lòng nhập thông tin hợp lệ!");
    return;
  }

  const sanPham = { ten, gia, soLuong, moTa };

  if (viTriDangSua === -1) {
    danhSachSanPham.push(sanPham);
  } else {
    danhSachSanPham[viTriDangSua] = sanPham;
    viTriDangSua = -1;
    nutXacNhan.textContent = "Thêm";
  }

  formSanPham.reset();
  hienThiSanPham();
});

// Hàm sửa sản phẩm
function suaSanPham(i) {
  const sp = danhSachSanPham[i];
  oTen.value = sp.ten;
  oGia.value = sp.gia;
  oSoLuong.value = sp.soLuong;
  oMoTa.value = sp.moTa;
  nutXacNhan.textContent = "Cập nhật";
  viTriDangSua = i;
}

// Hàm xóa sản phẩm
function xoaSanPham(i) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
    danhSachSanPham.splice(i, 1);
    hienThiSanPham();
  }
}

// Hàm tìm kiếm sản phẩm theo tên
oTimKiem.addEventListener("input", () => {
  const tuKhoa = oTimKiem.value.toLowerCase();
  const ketQua = danhSachSanPham.filter(sp =>
    sp.ten.toLowerCase().includes(tuKhoa)
  );
  hienThiSanPham(ketQua);
});

// Hiển thị lần đầu
hienThiSanPham();
