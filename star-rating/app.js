const stars = document.querySelectorAll(".stars span");
const result = document.getElementById("result");

function rate(value){
  stars.forEach((star, index) => {
    star.classList.toggle("active", index < value);
  });

  result.innerText = `Rating: ${value}`;
}