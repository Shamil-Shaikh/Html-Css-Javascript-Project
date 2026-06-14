let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function addTask() {
  const text = document.getElementById("taskInput").value;
  const date = document.getElementById("taskDate").value;

  if (!text) return alert("Enter task!");

  const task = {
    id: Date.now(),
    text,
    date,
    completed: false
  };

  tasks.push(task);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const today = new Date().toISOString().split("T")[0];

  tasks
    .filter(task => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .forEach(task => {
      const li = document.createElement("li");

      if (task.completed) li.classList.add("completed");
      if (task.date && task.date < today && !task.completed)
        li.classList.add("overdue");

      li.innerHTML = `
        ${task.text} (${task.date || "No date"})
        <br>
        <button onclick="toggleTask(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">❌</button>
      `;

      list.appendChild(li);
    });
}

function toggleTask(id) {
  tasks = tasks.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveAndRender();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveAndRender();
}

function filterTasks(type) {
  filter = type;
  renderTasks();
}

renderTasks();