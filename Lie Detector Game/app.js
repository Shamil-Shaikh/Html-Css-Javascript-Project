let startTime = 0;

function startTest() {
  const input = document.getElementById("input");
  input.value = "";
  input.focus();

  startTime = new Date().getTime();
  document.getElementById("result").innerText = "";
}

function checkResult() {
  const input = document.getElementById("input").value;
  const endTime = new Date().getTime();

  if (!input) {
    alert("Type something first!");
    return;
  }

  let timeTaken = (endTime - startTime) / 1000; // seconds
  let speed = input.length / timeTaken;

  let resultText = "";

  if (speed > 5) {
    resultText = "😎 You are telling the TRUTH!";
  } else {
    resultText = "🤨 Hmm... seems like a LIE!";
  }

  document.getElementById("result").innerText =
    `Speed: ${speed.toFixed(2)} chars/sec\n${resultText}`;
}