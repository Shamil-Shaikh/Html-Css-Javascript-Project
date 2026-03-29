let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

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

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

renderTasks();