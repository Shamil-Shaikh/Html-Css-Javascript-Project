let db = JSON.parse(localStorage.getItem("words")) || {};

const input = document.getElementById("input");
const suggest = document.getElementById("suggest");

input.addEventListener("keyup", () => {
  const text = input.value.trim();
  const words = text.split(" ");

  // Learn pattern
  if (words.length > 1) {
    const prev = words[words.length - 2];
    const current = words[words.length - 1];

    if (!db[prev]) db[prev] = {};
    if (!db[prev][current]) db[prev][current] = 0;

    db[prev][current]++;
    localStorage.setItem("words", JSON.stringify(db));
  }

  // Predict next word
  const last = words[words.length - 1];

  if (db[last]) {
    let nextWord = Object.keys(db[last]).reduce((a, b) =>
      db[last][a] > db[last][b] ? a : b
    );

    suggest.innerText = nextWord;
  } else {
    suggest.innerText = "...";
  }
});