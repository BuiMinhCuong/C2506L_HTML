const nutDenTrangMoi = document.getElementById("den-trang-moi");
if (nutDenTrangMoi) {
    nutDenTrangMoi.onclick = function () {
        window.location.href = "page.html";
    };
}

const nutQuayLai = document.getElementById("nut-quay-lai");
if (nutQuayLai) {
    nutQuayLai.onclick = function () {
        window.location.href = "index.html";
    };
}

const bieuMau = document.getElementById("bieu-mau-lien-he");
if (bieuMau) {
    bieuMau.onsubmit = function (e) {
        e.preventDefault();

        let hopLe = true;

        let ten = document.getElementById("ho-ten").value.trim();
        let email = document.getElementById("email").value.trim();
        let tinNhan = document.getElementById("tin-nhan").value.trim();

        document.getElementById("loi-ten").textContent = "";
        document.getElementById("loi-email").textContent = "";
        document.getElementById("loi-msg").textContent = "";

        if (ten === "") {
            hopLe = false;
            document.getElementById("loi-ten").textContent = "Tên không được để trống";
        }

        if (email === "") {
            hopLe = false;
            document.getElementById("loi-email").textContent = "Email không được để trống";
        } else if (!email.includes("@") || !email.includes(".")) {
            hopLe = false;
            document.getElementById("loi-email").textContent = "Email không hợp lệ";
        }

        if (tinNhan === "") {
            hopLe = false;
            document.getElementById("loi-msg").textContent = "Tin nhắn không được để trống";
        }

        if (hopLe) {
            alert("Gửi thành công!");
            bieuMau.reset();
        }
    };
}

const nutThemBai = document.getElementById("them-bai");
let dem = 1;

if (nutThemBai) {
    nutThemBai.onclick = function () {
        dem++;

        let goc = document.getElementById("bai-1");
        let banSao = goc.cloneNode(true);

        banSao.id = "bai-" + dem;
        banSao.querySelector("h1").textContent = "Bài viết số " + dem;

        banSao.querySelector("p").textContent =
            "Đây là nội dung bài viết được tạo động. ID: " + banSao.id;

        document.querySelector("main").appendChild(banSao);
    };
}
