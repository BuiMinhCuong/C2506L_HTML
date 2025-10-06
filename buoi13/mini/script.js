const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const submitBtn = document.getElementById("submitBtn");

let todos = [];
let editIndex = null;

function render() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");

    if (todos[i].done) {
      li.classList.add("done");
    }

    li.textContent = todos[i].text + " ";

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Hoàn thành";
    doneBtn.onclick = function() {
      todos[i].done = !todos[i].done;
      render();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Sửa";
    editBtn.onclick = function() {
      todoInput.value = todos[i].text;
      editIndex = i;
      submitBtn.textContent = "Cập nhật";
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Xóa";
    delBtn.onclick = function() {
      todos.splice(i, 1);
      render();
    };

    li.append(doneBtn, editBtn, delBtn);
    todoList.appendChild(li);
  }
}

todoForm.onsubmit = function(e) {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text === "") return;

  if (editIndex === null) {
    todos.push({ text: text, done: false });
  } else {
    todos[editIndex].text = text;
    editIndex = null;
    submitBtn.textContent = "Thêm";
  }

  todoInput.value = "";
  render();
};
