// Get DOM elements
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const descriptionInput = document.querySelector("#todo-description");
const prioritySelect = document.querySelector("#priority");
const todoList = document.querySelector("#list");

// Remove empty list message when adding first todo
function checkEmptyList() {
  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage && todoList.children.length > 1) {
    emptyMessage.remove();
  } else if (
    !document.querySelector(".empty-list") &&
    todoList.children.length === 0
  ) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "empty-list";
    emptyMessage.textContent = "Keine Todos vorhanden. Füge neue Todos hinzu!";
    todoList.appendChild(emptyMessage);
  }
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the todo text, description and priority
  const todoText = input.value.trim();
  const description = descriptionInput.value.trim();
  const priority = prioritySelect.value;

  // Only add if there's text
  if (todoText) {
    // Remove empty list message if present
    const emptyMessage = document.querySelector(".empty-list");
    if (emptyMessage) {
      emptyMessage.remove();
    }

    // Create new todo element
    const todoElement = document.createElement("div");
    todoElement.className = `todo-item priority-${priority}`;

    let descriptionHtml = '';
    if (description) {
      descriptionHtml = `<div class="todo-description">${description}</div>`;
    }

    todoElement.innerHTML = `
      <div class="todo-content">
        <div class="todo-text">
          <input type="checkbox" />
          <span>${todoText}</span>
        </div>
        <div class="todo-actions">
          <button class="delete-btn">Delete</button>
        </div>
      </div>
      ${descriptionHtml}
    `;

    // Add checkbox functionality
    const checkbox = todoElement.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", () => {
      const todoTextSpan = todoElement.querySelector(".todo-text span");
      const todoDescription = todoElement.querySelector(".todo-description");
      if (checkbox.checked) {
        todoTextSpan.classList.add("completed");
        if (todoDescription) {
          todoDescription.classList.add("completed");
        }
      } else {
        todoTextSpan.classList.remove("completed");
        if (todoDescription) {
          todoDescription.classList.remove("completed");
        }
      }
    });

    // Add delete functionality
    const deleteButton = todoElement.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      todoElement.remove();
      checkEmptyList();
    });

    // Add to the list
    todoList.appendChild(todoElement);

    // Clear the inputs
    input.value = "";
    descriptionInput.value = "";
  }
});

// Initialize empty list message
checkEmptyList();
