let text = "Practice makes perfect. Keep coding daily to improve your skills.";
let timer = 0;
let interval;
let started = false;

document.getElementById("text").innerText = text;

function startTest() {
  if (!started) {
    started = true;
    interval = setInterval(() => {
      timer++;
      document.getElementById("time").innerText = timer;
    }, 1000);
  }

  let input = document.getElementById("input").value;

  let wordsTyped = input.trim().split(" ").length;
  let wpm = Math.round((wordsTyped / timer) * 60);

  document.getElementById("wpm").innerText = wpm || 0;
}

function resetTest() {
  clearInterval(interval);
  timer = 0;
  started = false;

  document.getElementById("time").innerText = 0;
  document.getElementById("wpm").innerText = 0;
  document.getElementById("input").value = "";
}