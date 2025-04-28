// Get DOM elements
const form = document.querySelector('form');
const input = document.querySelector('input');
const todoList = document.querySelector('#list');

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the todo text
    const todoText = input.value.trim();

    // Only add if there's text
    if (todoText) {
        // Create new todo element
        const todoElement = document.createElement('div');
        todoElement.innerHTML = `
            <input type="checkbox" />
            <span>${todoText}</span>
            <button>delete</button>
        `;

        // Add delete functionality
        const deleteButton = todoElement.querySelector('button');
        deleteButton.addEventListener('click', () => {
            todoElement.remove();
        });

        // Add to the list
        todoList.appendChild(todoElement);

        // Clear the input
        input.value = '';
    }
}); 