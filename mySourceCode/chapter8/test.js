// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Event listener for adding a new task
addButton.addEventListener("click", function () {
  if (taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = ""; // Clear input field
  }
});

// Function to add a new task
function addTask(taskText) {
  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // Create a delete button for the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = " remove";
  deleteButton.className = "deleteButton";

  // Event listener for deleting a task
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // Append the delete button to the list item
  listItem.appendChild(deleteButton);

  // Append the list item to the task list
  taskList.appendChild(listItem);
}
