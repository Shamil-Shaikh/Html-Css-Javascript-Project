function changeMood(){

let mood = document.getElementById("moodInput").value.toLowerCase();
let result = document.getElementById("result");

if(mood === "happy"){
document.body.style.background = "yellow";
result.innerHTML = "You are Happy 😊";
}

else if(mood === "sad"){
document.body.style.background = "lightblue";
result.innerHTML = "You are Sad 😢";
}

else if(mood === "angry"){
document.body.style.background = "red";
result.innerHTML = "You are Angry 😡";
}

else if(mood === "calm"){
document.body.style.background = "lightgreen";
result.innerHTML = "You are Calm 😌";
}

else{
document.body.style.background = "gray";
result.innerHTML = "Mood not recognized";
}

}