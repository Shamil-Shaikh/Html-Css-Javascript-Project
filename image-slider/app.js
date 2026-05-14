const images = [

  "https://picsum.photos/id/1015/800/400",

  "https://picsum.photos/id/1016/800/400",

  "https://picsum.photos/id/1025/800/400",

  "https://picsum.photos/id/1035/800/400"

];

let current = 0;

const slide =
  document.getElementById("slide");

function showSlide(){

  slide.src = images[current];
}

function nextSlide(){

  current++;

  if(current >= images.length){
    current = 0;
  }

  showSlide();
}

function prevSlide(){

  current--;

  if(current < 0){
    current = images.length - 1;
  }

  showSlide();
}