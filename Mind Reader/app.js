let step = 0;

const steps = [
  "Think of any number (1–100)",
  "Multiply it by 2",
  "Add 10",
  "Divide by 2",
  "Subtract your original number",
  "I will guess your answer 😏"
];

function nextStep() {
  step++;

  if (step < steps.length) {
    document.getElementById("stepText").innerText = steps[step];
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("stepText").innerText = "Your final number is...";
  
  setTimeout(() => {
    document.getElementById("result").innerText = "😎 5";
  }, 1000);
}