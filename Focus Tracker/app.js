let time = 0;
let distractions = 0;
let interval;

function startFocus() {
  time = 0;
  distractions = 0;

  document.getElementById("time").innerText = 0;
  document.getElementById("distractions").innerText = 0;
  document.getElementById("score").innerText = 100;

  clearInterval(interval);

  interval = setInterval(() => {
    time++;
    document.getElementById("time").innerText = time;
    updateScore();
  }, 1000);
}

// Detect tab switch
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    distractions++;
    document.getElementById("distractions").innerText = distractions;
    updateScore();
  }
});

// Score calculation
function updateScore() {
  let score = Math.max(100 - distractions * 10, 0);
  document.getElementById("score").innerText = score;
}