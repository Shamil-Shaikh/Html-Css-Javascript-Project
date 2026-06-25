function createNotification() {
  const msg = document.getElementById("message").value;
  const delay = Number(document.getElementById("delay").value) * 1000;

  if (!msg || !delay) return alert("Enter all fields!");

  setTimeout(() => {
    showNotification(msg);
  }, delay);
}

function showNotification(message) {
  const box = document.getElementById("notificationBox");

  const div = document.createElement("div");
  div.classList.add("notification");
  div.innerText = message;

  box.appendChild(div);

  // Auto remove after 4 sec
  setTimeout(() => {
    div.remove();
  }, 4000);
}