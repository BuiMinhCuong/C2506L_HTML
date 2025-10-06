const form = document.getElementById('todoForm')
const input = document.getElementById('todoInput')
const list = document.getElementById('todoList')
const btnSubmit = form.querySelector('button')

let todos = []
let editId = null

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const text = input.value.trim()
  if (text === '') return

  if (editId) {
    const todo = todos.find(t => t.id === editId)
    todo.text = text
    editId = null
    btnSubmit.textContent = 'Thêm'
  } else {
    const newTodo = { id: Date.now(), text }
    todos.push(newTodo)
  }

  input.value = ''
  renderTodos()
})

function renderTodos() {
  list.innerHTML = ''
  todos.forEach(todo => {
    const li = document.createElement('li')
    li.textContent = todo.text + ' '

    const btnEdit = document.createElement('button')
    btnEdit.textContent = 'Sửa'
    btnEdit.addEventListener('click', () => {
      input.value = todo.text
      editId = todo.id
      btnSubmit.textContent = 'Cập nhật'
    })

    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'Xóa'
    btnDelete.addEventListener('click', () => {
      todos = todos.filter(t => t.id !== todo.id)
      renderTodos()
    })

    li.appendChild(btnEdit)
    li.appendChild(btnDelete)
    list.appendChild(li)
  })
}
