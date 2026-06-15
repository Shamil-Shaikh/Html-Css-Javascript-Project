const paragraphText = "Typing speed is an important skill for students and professionals. Practice daily to improve accuracy and speed.";

let timer = 60;
let interval;
let started = false;

const paragraph = document.getElementById("paragraph");
const input = document.getElementById("input");

paragraph.innerText = paragraphText;

input.addEventListener("input", () => {
  if (!started) {
    startTimer();
    started = true;
  }

  const typed = input.value;
  let correct = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === paragraphText[i]) correct++;
  }

  let accuracy = Math.floor((correct / typed.length) * 100) || 100;
  document.getElementById("accuracy").innerText = accuracy;

  // WPM
  let words = typed.split(" ").length;
  let wpm = Math.floor(words / (60 - timer + 1) * 60);
  document.getElementById("wpm").innerText = wpm || 0;
});

function startTimer() {
  interval = setInterval(() => {
    timer--;
    document.getElementById("time").innerText = timer;

    if (timer === 0) {
      clearInterval(interval);
      input.disabled = true;
    }
  }, 1000);
}

function restart() {
  clearInterval(interval);
  timer = 60;
  started = false;
  input.value = "";
  input.disabled = false;

  document.getElementById("time").innerText = 60;
  document.getElementById("wpm").innerText = 0;
  document.getElementById("accuracy").innerText = 100;
}