let data = JSON.parse(localStorage.getItem("kanban")) || {
  todo: [],
  progress: [],
  done: []
};

function save() {
  localStorage.setItem("kanban", JSON.stringify(data));
}

function render() {
  ["todo", "progress", "done"].forEach(col => {
    let container = document.getElementById(col);
    container.innerHTML = "";

    data[col].forEach((task, index) => {
      let div = document.createElement("div");
      div.className = "task";
      div.draggable = true;

      div.ondragstart = (e) => {
        e.dataTransfer.setData("text", JSON.stringify({ col, index }));
      };

      div.innerText = task;

      container.appendChild(div);
    });
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  let value = input.value;

  if (value === "") return;

  data.todo.push(value);
  input.value = "";
  save();
  render();
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e, newCol) {
  let item = JSON.parse(e.dataTransfer.getData("text"));

  let task = data[item.col][item.index];
  data[item.col].splice(item.index, 1);
  data[newCol].push(task);

  save();
  render();
}

render();