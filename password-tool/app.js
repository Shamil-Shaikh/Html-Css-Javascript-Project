function checkStrength() {
  let password = document.getElementById("password").value;
  let strengthText = document.getElementById("strength");

  let strength = 0;

  if (password.length > 6) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[@$!%*?&]/)) strength++;

  if (strength <= 1) {
    strengthText.innerText = "Weak ❌";
    strengthText.style.color = "red";
  } else if (strength == 2 || strength == 3) {
    strengthText.innerText = "Medium ⚠️";
    strengthText.style.color = "yellow";
  } else {
    strengthText.innerText = "Strong ✅";
    strengthText.style.color = "green";
  }
}

function generatePassword() {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$!%*?&";
  let password = "";

  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("password").value = password;
  checkStrength();
}

function copyPassword() {
  let input = document.getElementById("password");
  input.select();
  document.execCommand("copy");
  alert("Copied!");
}