const form = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const result = document.getElementById("result");

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(pw) {
    if (pw.length < 1 || pw.length > 12) {
        return "mat khau phai co tu 1 den 12 ky tu";
    }
    if (!/[A-Z]/.test(pw)) {
        return "mat khau phai co 1 ky tuu viet hoa";
    }
    return "";
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    result.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let hasError = false;

    if (email === "") {
        emailError.textContent = "Email khong duoc de trong";
        hasError = true;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Email khong hop le";
        hasError = true;
    }

    const pwErr = validatePassword(password);
    if (pwErr) {
        passwordError.textContent = pwErr;
        hasError = true;
    }

    if (hasError) {
        return;
    }

    result.textContent = "Đang ky thanh cong!";
    form.reset();
});
