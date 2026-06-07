function setMood(mood){
  let message = document.getElementById("message");

  if(mood === "happy"){
    document.body.style.background = "yellow";
    message.innerText = "Stay Happy 😄";
  }
  else if(mood === "sad"){
    document.body.style.background = "lightblue";
    message.innerText = "It's okay 😢";
  }
  else if(mood === "focus"){
    document.body.style.background = "gray";
    message.innerText = "Stay focused 😐";
  }
  else if(mood === "angry"){
    document.body.style.background = "red";
    message.innerText = "Calm down 😡";
  }
}