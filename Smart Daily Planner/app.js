let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task.text} ${task.mood} <br>
      <small>${task.date}</small>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const mood = document.getElementById("moodSelect").value;

  if (input.value === "") {
    alert("Enter a task!");
    return;
  }

  const task = {
    text: input.value,
    mood: mood,
    date: new Date().toLocaleDateString()
  };

  tasks.push(task);
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