let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUsers() {
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((u, i) => {
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>
                    <button class="action-btn" onclick="deleteUser(${i})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

document.getElementById("userForm").onsubmit = function (e) {
    e.preventDefault();

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;

    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));

    renderUsers();
    this.reset();
};

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();
}

renderUsers();
