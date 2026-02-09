let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">X</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return;

    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();

