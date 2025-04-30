// Get DOM elements
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-form input[type='text']");
const todoList = document.querySelector("#list");

function checkEmptyList() {
  const emptyMessage = document.querySelector(".empty-list");
  // Only show empty message if there are no todos
  if (todoList.querySelectorAll(".todo-item").length === 0) {
    if (!emptyMessage) {
      const msg = document.createElement("div");
      msg.className = "empty-list text-center text-base-content/60 italic";
      msg.textContent = "No todos yet. Add new todos!";
      todoList.appendChild(msg);
    }
  } else if (emptyMessage) {
    emptyMessage.remove();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText) {
    // Remove empty list message if present
    const emptyMessage = document.querySelector(".empty-list");
    if (emptyMessage) emptyMessage.remove();

    // Create new todo element
    const todoElement = document.createElement("div");
    todoElement.className =
      "todo-item flex items-center justify-between bg-base-100 rounded-lg px-4 py-2 shadow border border-base-200";
    todoElement.innerHTML = `
      <span class="text-lg">${todoText}</span>
      <button class="text-2xl text-base-content hover:text-error transition-colors delete-btn" title="Delete">×</button>
    `;

    // Add delete functionality
    const deleteButton = todoElement.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      todoElement.remove();
      checkEmptyList();
    });

    // Add to the list
    todoList.appendChild(todoElement);
    input.value = "";
  }
  checkEmptyList();
});

// Initialize empty list message
checkEmptyList();
