function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generatePalette() {
  let palette = document.getElementById("palette");
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let color = randomColor();

    let div = document.createElement("div");
    div.className = "color";
    div.style.background = color;

    div.innerHTML = `<span>${color}</span>`;

    div.onclick = () => {
      navigator.clipboard.writeText(color);
      alert("Copied " + color);
    };

    palette.appendChild(div);
  }
}

generatePalette();