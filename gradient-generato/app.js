const box =
  document.getElementById("box");

const code =
  document.getElementById("code");

function randomColor(){

  let letters =
    "0123456789ABCDEF";

  let color = "#";

  for(let i=0;i<6;i++){

    color +=
      letters[Math.floor(Math.random()*16)];
  }

  return color;
}

function generateGradient(){

  let color1 = randomColor();

  let color2 = randomColor();

  let gradient =
    `linear-gradient(135deg,
    ${color1},
    ${color2})`;

  box.style.background = gradient;

  code.innerText =
    `background: ${gradient};`;
}

function copyCode(){

  navigator.clipboard.writeText(
    code.innerText
  );

  alert("CSS Copied!");
}

generateGradient();