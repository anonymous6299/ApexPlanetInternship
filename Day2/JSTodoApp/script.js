const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
let todos = [];
const deleteTodo = (item) => {
    const newTodos = todos.filter((ele) => {
        return ele !== item;
    })
    todos=newTodos;
    renderTodos(newTodos)
}
const renderTodos = (todos) => {
    todoList.innerHTML = `
    ${todos.map((item) => {
        return (
            `<div class="todo-card">
        <span class="todo-text">${item}</span>
        <button class="delete-btn" onclick="deleteTodo('${item}')">Delete</button>
      </div>`
        )
    })
        }
    `.split(",").join(" ")
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    todos.push(input.value);
    renderTodos(todos);
    input.value = "";
})
