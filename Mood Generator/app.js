function generateMood() {
    let mood = document.getElementById("moodInput").value.toLowerCase();
    let message = document.getElementById("message");

    if (mood === "happy") {
        document.body.style.background = "yellow";
        message.innerText = "Stay happy! 😊";
    } 
    else if (mood === "sad") {
        document.body.style.background = "blue";
        message.innerText = "It's okay to feel sad 💙";
    } 
    else if (mood === "angry") {
        document.body.style.background = "red";
        message.innerText = "Take a deep breath 😡";
    } 
    else {
        document.body.style.background = "gray";
        message.innerText = "Mood not recognized 🤔";
    }
}