function updateClock(){
  const now = new Date();

  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("time").innerText = `${h}:${m}:${s}`;
  document.getElementById("date").innerText = now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();