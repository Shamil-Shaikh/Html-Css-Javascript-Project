const palette =
  document.getElementById("palette");

function randomColor(){

  const letters =
    "0123456789ABCDEF";

  let color = "#";

  for(let i=0;i<6;i++){

    color +=
      letters[
        Math.floor(Math.random()*16)
      ];
  }

  return color;
}

function generatePalette(){

  palette.innerHTML = "";

  for(let i=0;i<5;i++){

    let color =
      randomColor();

    let box =
      document.createElement("div");

    box.className =
      "color-box";

    box.style.background =
      color;

    box.innerHTML =
      `<span>${color}</span>`;

    box.addEventListener(
      "click",
      () => {

        navigator.clipboard
          .writeText(color);

        alert(
          `${color} copied!`
        );
      }
    );

    palette.appendChild(box);
  }
}

generatePalette();