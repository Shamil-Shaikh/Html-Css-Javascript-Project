let idleTime = 0;
const limit = 5; // seconds

// increase idle time every second
setInterval(() => {
  idleTime++;

  if (idleTime >= limit) {
    lockScreen();
  }
}, 1000);

// reset idle time on activity
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;

function resetTimer() {
  idleTime = 0;
}

// lock screen
function lockScreen() {
  document.getElementById("lockScreen").classList.remove("hidden");
}

// unlock
function unlock() {
  document.getElementById("lockScreen").classList.add("hidden");
  idleTime = 0;
}