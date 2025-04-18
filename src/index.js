import { renderTodos, addTodo, removeTodo, toggleComplete } from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = input.value.trim();
    if (todoText) {
      addTodo(todoText);
      input.value = "";
      renderTodos();
    }
  });

  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = e.target.parentElement.dataset.id;
      removeTodo(id);
      renderTodos();
    } else if (e.target.classList.contains("toggle-btn")) {
      const id = e.target.parentElement.dataset.id;
      toggleComplete(id);
      renderTodos();
    }
  });

  renderTodos();
});
