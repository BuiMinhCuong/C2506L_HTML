const form = document.getElementById('todoForm')
const input = document.getElementById('todoInput')
const list = document.getElementById('todoList')

let todos = []

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const text = input.value.trim()
  if (text === '') return

  const newTodo = {
    id: Date.now(),
    text: text
  }

  todos.push(newTodo)
  input.value = ''
  renderTodos()
})

function renderTodos() {
  list.innerHTML = ''
  todos.forEach(todo => {
    const li = document.createElement('li')
    li.textContent = todo.text
    list.appendChild(li)
  })
}
