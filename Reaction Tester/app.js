let startTime, endTime;
let waiting = false;
let best = localStorage.getItem("best") || null;

const box = document.getElementById("box");
const timeText = document.getElementById("time");
const bestText = document.getElementById("best");

if (best) bestText.innerText = best;

box.addEventListener("click", () => {
  if (!waiting) {
    box.innerText = "Wait for green...";
    box.style.background = "red";

    waiting = true;

    const delay = Math.random() * 3000 + 2000;

    setTimeout(() => {
      box.style.background = "green";
      box.innerText = "CLICK!";
      startTime = new Date().getTime();
    }, delay);
  } else {
    if (box.style.background === "green") {
      endTime = new Date().getTime();
      const reaction = endTime - startTime;

      timeText.innerText = reaction;

      if (!best || reaction < best) {
        best = reaction;
        localStorage.setItem("best", best);
        bestText.innerText = best;
      }

      box.innerText = "Click to Restart";
      box.style.background = "red";
      waiting = false;
    } else {
      box.innerText = "Too early! 😅";
      waiting = false;
    }
  }
});