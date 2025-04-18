let todos = JSON.parse(localStorage.getItem("todos")) || [];

export function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = todos
    .map(
      (todo) => `
        <li class="todo-item ${todo.completed ? "completed" : ""}" data-id="${
        todo.id
      }">
            ${todo.text}
            <button class="toggle-btn">${
              todo.completed ? "Undo" : "Complete"
            }</button>
            <button class="delete-btn">Delete</button>
        </li>
    `
    )
    .join("");
}

export function addTodo(text) {
  const todo = {
    id: Date.now().toString(),
    text,
    completed: false,
  };
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function toggleComplete(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
