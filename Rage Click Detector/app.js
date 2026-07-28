let clicks = 0;
let lastClickTime = 0;
let rageCount = 0;

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const now = new Date().getTime();

  clicks++;
  document.getElementById("count").innerText = clicks;

  // detect fast repeated clicks
  if (now - lastClickTime < 500) {
    rageCount++;
  } else {
    rageCount = 0;
  }

  lastClickTime = now;

  // rage detection
  if (rageCount >= 3) {
    document.getElementById("status").innerText = "😤 User is frustrated!";
  } else {
    document.getElementById("status").innerText = "";
  }
});