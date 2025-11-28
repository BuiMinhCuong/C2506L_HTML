const input = document.getElementById("taskInput");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");

btnAdd.onclick = function () {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const div = document.createElement("div");
    div.className = "action-btns";

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";

    div.appendChild(btnEdit);
    div.appendChild(btnDelete);
    li.appendChild(span);
    li.appendChild(div);
    taskList.appendChild(li);

    input.value = "";

    btnEdit.onclick = function () {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    };

    btnDelete.onclick = function () {
        li.remove();
    };
};
