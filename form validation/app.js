document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (username === "" || email === "" || password === "") {
        message.textContent = "All fields are required";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters";
        message.style.color = "red";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
});


