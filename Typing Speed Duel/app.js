const textList = [
  "JavaScript is powerful and fun to learn.",
  "Practice daily to improve your coding skills.",
  "Typing speed matters for developers.",
  "Consistency beats talent every time."
];

let timer = 30;
let interval;
let currentText = "";

function startTest() {
  const input = document.getElementById("input");
  input.value = "";
  input.disabled = false;
  input.focus();

  currentText = textList[Math.floor(Math.random() * textList.length)];
  document.getElementById("text").innerText = currentText;

  timer = 30;
  document.getElementById("time").innerText = timer;

  clearInterval(interval);
  interval = setInterval(updateTime, 1000);

  input.addEventListener("input", checkTyping);
}

function updateTime() {
  timer--;
  document.getElementById("time").innerText = timer;

  if (timer === 0) {
    clearInterval(interval);
    endTest();
  }
}

function checkTyping() {
  const input = document.getElementById("input").value;
  let mistakes = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== currentText[i]) {
      mistakes++;
    }
  }

  document.getElementById("mistakes").innerText = mistakes;

  let words = input.trim().split(" ").length;
  let wpm = Math.round(words * (60 / 30));

  document.getElementById("wpm").innerText = wpm;
}

function endTest() {
  document.getElementById("input").disabled = true;
  alert("Time's up!");
}