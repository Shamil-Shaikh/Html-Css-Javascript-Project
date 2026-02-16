const images = [
  "https://picsum.photos/600/350?1",
  "https://picsum.photos/600/350?2",
  "https://picsum.photos/600/350?3",
  "https://picsum.photos/600/350?4"
];

let index = 0;
const slide = document.getElementById("slide");

function next() {
  index = (index + 1) % images.length;
  slide.src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  slide.src = images[index];
}
