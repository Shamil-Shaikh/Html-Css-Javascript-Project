function checkStrength() {
  const pass = document.getElementById("password").value;
  const bar = document.getElementById("strengthBar");
  const text = document.getElementById("strengthText");
  const suggestions = document.getElementById("suggestions");

  let score = 0;
  suggestions.innerHTML = "";

  if (pass.length >= 8) score++;
  else addSuggestion("Use at least 8 characters");

  if (/[A-Z]/.test(pass)) score++;
  else addSuggestion("Add uppercase letter");

  if (/[a-z]/.test(pass)) score++;
  else addSuggestion("Add lowercase letter");

  if (/[0-9]/.test(pass)) score++;
  else addSuggestion("Add numbers");

  if (/[^A-Za-z0-9]/.test(pass)) score++;
  else addSuggestion("Add special character");

  let width = score * 20;
  let color;

  if (score <= 2) {
    color = "red";
    text.innerText = "Weak Password";
  } else if (score <= 4) {
    color = "orange";
    text.innerText = "Medium Password";
  } else {
    color = "green";
    text.innerText = "Strong Password";
  }

  bar.innerHTML = `<div style="width:${width}%; background:${color};"></div>`;
}

function addSuggestion(msg) {
  const li = document.createElement("li");
  li.innerText = msg;
  document.getElementById("suggestions").appendChild(li);
}

// Generate password
function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pass = "";

  for (let i = 0; i < 12; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("password").value = pass;
  checkStrength();
}

// Copy
function copyPassword() {
  const pass = document.getElementById("password");
  navigator.clipboard.writeText(pass.value);
  alert("Copied!");
}