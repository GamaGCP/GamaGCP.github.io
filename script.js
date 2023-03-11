const taskLists = {
  'to-do': document.getElementById('to-do
// Add new task to the table
function addTask() {
  var taskInput = document.getElementById("new-task");
  var taskName = taskInput.value;
  if (taskName === "") {
    alert("Please enter a task name");
    return;
  }
  var row = document.createElement("tr");
  var taskNameCell = document.createElement("td");
  taskNameCell.textContent = taskName;
  var assignedToCell = document.createElement("td");
  assignedToCell.textContent = "Me";
  var dueDateCell = document.createElement("td");
  dueDateCell.textContent = "2022-04-30";
  var statusCell = document.createElement("td");
  statusCell.textContent = "Not Started";
  var actionsCell = document.createElement("td");
  var editButton = document.createElement("button");
  editButton.className = "edit-task";
  editButton.textContent = "Edit";
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-task";
  deleteButton.textContent = "Delete";
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);
  row.appendChild(taskNameCell);
  row.appendChild(assignedToCell);
  row.appendChild(dueDateCell);
  row.appendChild(statusCell);
  row.appendChild(actionsCell);
  var taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  task
