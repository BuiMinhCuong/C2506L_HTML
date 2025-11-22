const formSanPham = document.getElementById("formSanPham");
const oTen = document.getElementById("ten");
const oGia = document.getElementById("gia");
const oSoLuong = document.getElementById("soLuong");
const oMoTa  = document.getElementById("moTa");
const bangSanPham = document.getElementById("bangSanPham");
const tongGiaTri = document.getElementById("tongGiaTri");
const timKiem = document.getElementById("timKiem")

let danhSachSanPham = JSON.parse(localStorage.getItem(danhSachSanPham))||[];
let viTriDangSua = -1;

function hienThiSanPham(danhSach =danhSachSanPham){
  bangSanPham.innerHTML ="";
  let tong = 0;

  danhSach.forEach((sp,i)=>{
    const hang = document.createElement("tr");
    hang.innerHTML = `
    <td>${sp.ten}</td>
    <td>${sp.gia.tolocaLeString()}</td>
    <td>${sp.soLuong}</td>
    <td>${sp.moTa}</td>
    <td>${(sp.gia * sp.soLuong).toLocaleString()}</td>
    <td>
    </td>
    
    
    
    `
  })
  
}
