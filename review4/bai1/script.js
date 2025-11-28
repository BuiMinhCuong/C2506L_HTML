const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const message = document.getElementById("message");

form.onsubmit = function (e) {
    e.preventDefault();

    let valid = true;
    userError.textContent = "";
    passError.textContent = "";
    message.textContent = "";
    username.classList.remove("invalid");
    password.classList.remove("invalid");

    if (username.value.trim() === "") {
        userError.textContent = "Tên đăng nhập không được để trống";
        username.classList.add("invalid");
        valid = false;
    }

    if (password.value.length < 6) {
        passError.textContent = "Mật khẩu phải có ít nhất 6 ký tự";
        password.classList.add("invalid");
        valid = false;
    }

    if (!valid) {
        username.value = "";
        password.value = "";
        message.textContent = "Thông tin đăng nhập không hợp lệ. Vui lòng thử lại.";
        return;
    }

    message.textContent = "Xin chào, " + username.value + "!";
};
