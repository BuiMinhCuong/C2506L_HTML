document.getElementById("nhap").onsubmit = function (e) {
    e.preventDefault()

    const name = document.getElementById("name").value.trim()
    const price = document.getElementById("price").value.trim()

    if (name === "") {
        alert("Tên không được để trống")
        return
    }

    if (price === "" || Number(price) <= 0) {
        alert("Giá phải là số dương")
        return
    }

    alert("Thêm thành công")

    document.getElementById("nhap").reset()
}
