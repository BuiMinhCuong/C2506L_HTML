const formUser = document.getElementById("form-user");
const userList = document.getElementById("user-list");
let users = [];

formUser.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    users.push({ name, email });
    renderUsers();
    formUser.reset();
};

function renderUsers() {
    userList.innerHTML = "";
    users.forEach((user, i) => {
        userList.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button onclick="deleteUser(${i})">Xóa</button></td>
            </tr>
        `;
    });
}

function deleteUser(i) {
    users.splice(i, 1);
    renderUsers();
}
