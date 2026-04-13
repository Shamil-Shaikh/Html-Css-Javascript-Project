let moods = JSON.parse(localStorage.getItem("moods")) || [];

function saveMood(emoji) {
  let date = new Date().toLocaleDateString();

  moods.push({ emoji, date });
  localStorage.setItem("moods", JSON.stringify(moods));

  render();
}

function render() {
  let list = document.getElementById("history");
  list.innerHTML = "";

  moods.forEach(m => {
    let li = document.createElement("li");
    li.innerText = `${m.date} - ${m.emoji}`;
    list.appendChild(li);
  });
}

render();