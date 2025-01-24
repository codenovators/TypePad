// Get references
const tasklist = document.getElementById("tasklist");
const userInput = document.getElementById("userInput");

// Load tasks from localStorage
window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => addTaskToList(task));
};

// Add a task
function addTask() {
  const task = userInput.value.trim();
  if (!task) {
    alert("Please enter a task!");
    return;
  }
  addTaskToList(task);
  saveTask(task);
  userInput.value = "";
}

// Add task to the DOM
function addTaskToList(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = () => {
    tasklist.removeChild(li);
    deleteTask(task);
  };

  li.appendChild(deleteButton);
  tasklist.appendChild(li);
}

// Save task to localStorage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Delete task from localStorage
function deleteTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
