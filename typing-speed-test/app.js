let timer = 30;

let started = false;

let interval;

function startTest(){

  if(!started){

    started = true;

    interval = setInterval(updateTime,1000);
  }

  let input =
    document.getElementById("input").value;

  let original =
    document.getElementById("text").innerText;

  let words =
    input.trim().split(" ").length;

  let wpm =
    Math.round(words / 0.5);

  document.getElementById("wpm")
    .innerText = wpm;

  let correct = 0;

  for(let i=0;i<input.length;i++){

    if(input[i] === original[i]){

      correct++;
    }
  }

  let accuracy =
    Math.round(
      (correct / input.length) * 100
    ) || 0;

  document.getElementById("accuracy")
    .innerText = accuracy;
}

function updateTime(){

  timer--;

  document.getElementById("time")
    .innerText = timer;

  if(timer === 0){

    clearInterval(interval);

    document.getElementById("input")
      .disabled = true;

    alert("Time Over!");
  }
}