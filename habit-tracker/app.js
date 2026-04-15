let habits = JSON.parse(localStorage.getItem("habits")) || [];

function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  habits.forEach((h, index) => {
    let div = document.createElement("div");
    div.className = "habit";

    div.innerHTML = `
      <h3>${h.name}</h3>
      <p>🔥 Streak: ${h.streak}</p>
      <button onclick="markDone(${index})">Done Today</button>
      <button onclick="deleteHabit(${index})">Delete</button>
    `;

    list.appendChild(div);
  });
}

function addHabit() {
  let input = document.getElementById("habitInput");
  let name = input.value;

  if (name === "") return;

  habits.push({ name, streak: 0, lastDone: null });
  localStorage.setItem("habits", JSON.stringify(habits));

  input.value = "";
  render();
}

function markDone(index) {
  let today = new Date().toDateString();
  let habit = habits[index];

  if (habit.lastDone === today) return;

  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (habit.lastDone === yesterday.toDateString()) {
    habit.streak++;
  } else {
    habit.streak = 1;
  }

  habit.lastDone = today;

  localStorage.setItem("habits", JSON.stringify(habits));
  render();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  localStorage.setItem("habits", JSON.stringify(habits));
  render();
}

render();