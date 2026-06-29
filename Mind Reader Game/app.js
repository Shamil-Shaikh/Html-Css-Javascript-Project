const colorList = [
  "red","blue","green","yellow",
  "purple","orange","pink","cyan",
  "lime","brown","teal","magenta",
  "gold","navy","coral","gray"
];

let chosenGroup = [];

function renderColors(list) {
  const container = document.getElementById("colors");
  container.innerHTML = "";

  list.forEach(color => {
    const div = document.createElement("div");
    div.className = "color";
    div.style.background = color;
    container.appendChild(div);
  });
}

// Initial render
renderColors(colorList);

function startGame() {
  alert("Step 1: Apna color yaad rakho 👀");

  let group1 = colorList.filter((_, i) => i % 2 === 0);
  let group2 = colorList.filter((_, i) => i % 2 !== 0);

  setTimeout(() => {
    renderColors(group1);
    let answer = confirm("Kya tumhara color yahan hai?");

    chosenGroup = answer ? group1 : group2;

    nextStep();
  }, 500);
}

function nextStep() {
  let half1 = chosenGroup.slice(0, chosenGroup.length / 2);
  let half2 = chosenGroup.slice(chosenGroup.length / 2);

  setTimeout(() => {
    renderColors(half1);
    let answer = confirm("Ab is group me hai?");

    chosenGroup = answer ? half1 : half2;

    finalGuess();
  }, 500);
}

function finalGuess() {
  setTimeout(() => {
    document.getElementById("result").innerText =
      "😎 Your color is: " + chosenGroup[0];
  }, 500);
}