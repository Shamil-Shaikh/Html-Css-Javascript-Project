function setMood(mood){

  let message =
    document.getElementById("message");

  if(mood === "happy"){

    document.body.style.background =
      "#facc15";

    message.innerHTML =
      "😊 Feeling Happy!";
  }

  if(mood === "cool"){

    document.body.style.background =
      "#38bdf8";

    message.innerHTML =
      "😎 Feeling Cool!";
  }

  if(mood === "sad"){

    document.body.style.background =
      "#94a3b8";

    message.innerHTML =
      "😢 Feeling Sad!";
  }

  if(mood === "angry"){

    document.body.style.background =
      "#ef4444";

    message.innerHTML =
      "😡 Feeling Angry!";
  }
}