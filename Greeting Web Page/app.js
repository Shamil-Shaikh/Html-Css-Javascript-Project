function greet() {
    let name = document.getElementById("name").value;
    let output = document.getElementById("output");

    if (name === "") {
        output.innerHTML = "⚠ Please enter your name!";
    } else {
        let time = new Date().getHours();

        if (time < 12) {
            output.innerHTML = "Good Morning ☀ " + name;
        } else if (time < 18) {
            output.innerHTML = "Good Afternoon 🌤 " + name;
        } else {
            output.innerHTML = "Good Evening 🌙 " + name;
        }
    }
}