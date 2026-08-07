let step = 0;

function step1() {
  step++;

  const steps = document.getElementById("steps");
  const result = document.getElementById("result");

  if (step === 1) {
    steps.innerText = "Multiply the position of your color by 2";
  }
  else if (step === 2) {
    steps.innerText = "Add 4 to the result";
  }
  else if (step === 3) {
    steps.innerText = "Divide by 2";
  }
  else if (step === 4) {
    steps.innerText = "Subtract your original number";
  }
  else if (step === 5) {
    steps.innerText = "Now map your result:\n0=Red, 1=Blue, 2=Green, 3=Yellow, 4=Purple";
  }
  else if (step === 6) {
    result.innerText = "😏 I predicted: BLUE!";
  }
}