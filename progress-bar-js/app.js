let value = 0;
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

function increase(){
  if(value < 100){
    value += 10;
    bar.style.width = value + "%";
    percent.innerText = value + "%";
  }
}

function reset(){
  value = 0;
  bar.style.width = "0%";
  percent.innerText = "0%";
}