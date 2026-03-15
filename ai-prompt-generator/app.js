const prompts = [
"Create a futuristic website about",
"Write a sci-fi story about",
"Design a mobile app for",
"Imagine the future of",
"Create a startup idea about",
"Build a game concept about",
"Write a blog about"
];

function generatePrompt(){

let topic = document.getElementById("topic").value;

if(topic === ""){
topic = "technology";
}

let random = prompts[Math.floor(Math.random()*prompts.length)];

let finalPrompt = random + " " + topic;

document.getElementById("result").innerText = finalPrompt;

addHistory(finalPrompt);
}

function copyPrompt(){

let text = document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Prompt Copied!");
}

function toggleMode(){
document.body.classList.toggle("dark");
}

function addHistory(prompt){

let li = document.createElement("li");

li.innerText = prompt;

document.getElementById("history").appendChild(li);
}