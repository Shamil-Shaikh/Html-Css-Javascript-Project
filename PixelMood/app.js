
const colorPicker = document.getElementById("baseColor");
const palette = document.getElementById("palette");
const status = document.getElementById("status");

document.getElementById("generateBtn")
  .addEventListener("click", generatePalette);

function generatePalette() {
  const base = colorPicker.value;
  const colors = [base];

  // Generate four additional random colors
  while (colors.length < 5) {
    const color = "#" + Math.floor(
      Math.random() * 16777215
    ).toString(16).padStart(6, "0");

    colors.push(color);
  }

  palette.innerHTML = "";

  colors.forEach(color => {
    const swatch = document.createElement("div");
    swatch.className = "swatch";

    swatch.innerHTML = `
      <div class="color" style="background:${color}"></div>
      <span class="hex">${color.toUpperCase()}</span>
    `;

    swatch.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(color);
        status.textContent = `${color.toUpperCase()} copied! 📋`;
      } catch {
        status.textContent =
          "Copy unavailable. Select the HEX code manually.";
      }
    });

    palette.appendChild(swatch);
  });

  status.textContent = "Your new palette is ready! ✨";
}

generatePalette();
