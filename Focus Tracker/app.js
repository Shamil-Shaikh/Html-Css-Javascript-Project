
const video = document.getElementById("video");
const statusText = document.getElementById("status");
const timeDisplay = document.getElementById("time");

let focusTime = 0;
let focused = false;

// Camera start
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  });

// Fake face detection logic 😏 (brightness change trick)
setInterval(() => {
  const random = Math.random();

  if (random > 0.3) {
    focused = true;
    statusText.innerText = "✅ Focused";
    statusText.style.color = "lightgreen";
  } else {
    focused = false;
    statusText.innerText = "⚠️ Not Focused";
    statusText.style.color = "red";
  }
}, 2000);

// Timer
setInterval(() => {
  if (focused) {
    focusTime++;
    timeDisplay.innerText = focusTime;
  }
}, 1000);