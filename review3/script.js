let ds = []; 

document.getElementById("btnThem").onclick = function () {
    let ten = document.getElementById("ten").value;
    let gia = document.getElementById("gia").value;

    if (ten === "" || gia === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    ds.push({
        ten: ten,
        gia: gia
    });

    hienThi();
};

function hienThi() {
    let tbody = document.getElementById("list");
    tbody.innerHTML = "";

    ds.forEach((sp, index) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${sp.ten}</td>
            <td>${sp.gia} đ</td>
            <td>
                <button class="delete-btn" onclick="xoa(${index})">Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function xoa(i) {
    ds.splice(i, 1);
    hienThi();
}
