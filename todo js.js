// Global Scope - Task List
let tasks = [];

// Function to Add Task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({ text: taskText, completed: false }); // Store as object
    taskInput.value = "";
    displayTasks();
}

//Function to Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

//Function to Toggle Completion Status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

//Function to Display Tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button onclick="deleteTask(${index})">❌</button>
        `;

        taskList.appendChild(li);
    });
}
