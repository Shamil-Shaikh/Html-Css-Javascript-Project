const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
    let password = passwordInput.value;
    let strength = "Weak";

    if (password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 6) {
        strength = "Medium";
    }

    strengthText.textContent = strength;
});


