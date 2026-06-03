const box =
document.getElementById("box");

const cssCode =
document.getElementById("cssCode");

const sliders =
document.querySelectorAll("input");

function updateShadow(){

const x =
document.getElementById("x").value;

const y =
document.getElementById("y").value;

const blur =
document.getElementById("blur").value;

const shadow =
`${x}px ${y}px ${blur}px rgba(0,0,0,0.4)`;

box.style.boxShadow =
shadow;

cssCode.innerText =
`box-shadow: ${shadow};`;
}

sliders.forEach(slider => {
slider.addEventListener(
"input",
updateShadow
);
});

function copyCode(){

navigator.clipboard.writeText(
cssCode.innerText
);

alert("CSS Copied!");
}

updateShadow();