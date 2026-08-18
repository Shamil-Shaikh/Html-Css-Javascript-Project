const vault = document.getElementById("vault");
const recordBtn = document.getElementById("recordBtn");
const replayBtn = document.getElementById("replayBtn");
const clearBtn = document.getElementById("clearBtn");

const count = document.getElementById("count");
const status = document.getElementById("status");

let recording = false;
let startTime = 0;
let memories = JSON.parse(localStorage.getItem("memoryVault")) || [];

updateCount();

recordBtn.addEventListener("click", () => {

  recording = !recording;

  if (recording) {
    startTime = performance.now();

    recordBtn.innerText = "⏹️ Stop Recording";
    recordBtn.classList.add("active");

    status.innerText = "Recording...";
  } else {
    recordBtn.innerText = "🔴 Start Recording";
    recordBtn.classList.remove("active");

    status.innerText = "Saved";

    localStorage.setItem(
      "memoryVault",
      JSON.stringify(memories)
    );
  }
});

vault.addEventListener("click", (event) => {

  if (!recording) return;

  const rect = vault.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const time = performance.now() - startTime;

  memories.push({
    x: x,
    y: y,
    time: time
  });

  createDot(x, y);

  updateCount();
});

function createDot(x, y, replay = false) {

  const dot = document.createElement("div");

  dot.classList.add(
    replay ? "memory-dot replay-dot" : "memory-dot"
  );

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  vault.appendChild(dot);

  if (!replay) {
    setTimeout(() => {
      dot.remove();
    }, 1000);
  }
}

replayBtn.addEventListener("click", () => {

  if (memories.length === 0) {
    alert("No memory recorded yet!");
    return;
  }

  status.innerText = "Replaying...";

  memories.forEach(memory => {

    setTimeout(() => {
      createDot(
        memory.x,
        memory.y,
        true
      );
    }, memory.time);

  });

  const lastTime = memories[memories.length - 1].time;

  setTimeout(() => {
    status.innerText = "Replay Complete";
  }, lastTime + 500);
});

clearBtn.addEventListener("click", () => {

  memories = [];

  localStorage.removeItem("memoryVault");

  document
    .querySelectorAll(".memory-dot")
    .forEach(dot => dot.remove());

  updateCount();

  status.innerText = "Cleared";
});

function updateCount() {
  count.innerText = memories.length;
}