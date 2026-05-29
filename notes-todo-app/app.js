let tasks =
  JSON.parse(localStorage.getItem("tasks"))
  || [];

function saveTasks(){

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}

function renderTasks(){

  let taskList =
    document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach((task,index)=>{

    taskList.innerHTML += `
      <li class="${task.done ? 'completed' : ''}">

        ${task.text}

        <div class="actions">

          <button onclick="toggleTask(${index})">
            ✅
          </button>

          <button onclick="deleteTask(${index})">
            ❌
          </button>

        </div>

      </li>
    `;
  });
}

function addTask(){

  let input =
    document.getElementById("taskInput");

  if(input.value === "") return;

  tasks.push({
    text:input.value,
    done:false
  });

  input.value = "";

  saveTasks();

  renderTasks();
}

function toggleTask(index){

  tasks[index].done =
    !tasks[index].done;

  saveTasks();

  renderTasks();
}

function deleteTask(index){

  tasks.splice(index,1);

  saveTasks();

  renderTasks();
}

renderTasks();