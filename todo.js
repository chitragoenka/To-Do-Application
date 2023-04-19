// Get references to HTML elements
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');

// Initializing list

function initializeList() {
  const list = JSON.parse(localStorage.getItem('list'));
  if (!list) {
    // If list is null or undefined, initialize an empty array
    const emptyList = [];
    localStorage.setItem('list', JSON.stringify(emptyList));
  }
}
initializeList();

const list = []

// Add event listener for button click
addButton.addEventListener('click', function() {
  const todoText = todoInput.value;
  if (todoText.trim() !== '') { // Check if input is not empty
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = todoText;
    list.push(todoText);
    localStorage.setItem('list', JSON.stringify(list)); // Store the to-do list in browser local storage

 // Add event listener for list item click to remove it after 1 second
      li.addEventListener('click', function() {
      li.classList.add('completed');
        setTimeout(function() {
          li.remove();
        }, 1000);
      });

 // Add the list item to the to-do list
    todoList.appendChild(li);

 // Clear the input box
    todoInput.value = '';
  }
});





