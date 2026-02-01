let index = 1;
const img = document.getElementById("slide");

function next() {
    index++;
    img.src = `https://picsum.photos/600/350?random=${index}`;
}

function prev() {
    index--;
    if (index < 1) index = 1;
    img.src = `https://picsum.photos/600/350?random=${index}`;
}


