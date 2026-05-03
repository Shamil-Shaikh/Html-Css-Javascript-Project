function updateClock() {

  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").innerText =
    `${hours}:${minutes}:${seconds}`;

  document.getElementById("date").innerText =
    now.toDateString();

  let greeting = "";

  if (hours < 12) {
    greeting = "Good Morning ☀️";
  } else if (hours < 18) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }

  document.getElementById("greeting").innerText = greeting;
}

setInterval(updateClock, 1000);

updateClock();