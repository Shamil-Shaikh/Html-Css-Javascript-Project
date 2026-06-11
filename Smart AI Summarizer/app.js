function summarize() {
  const text = document.getElementById("inputText").value;

  if (!text) return alert("Enter text first!");

  let sentences = text.split(".");
  sentences = sentences.filter(s => s.trim().length > 0);

  // Word frequency
  let words = text.toLowerCase().split(/\W+/);
  let freq = {};

  words.forEach(word => {
    if (word.length > 3) {
      freq[word] = (freq[word] || 0) + 1;
    }
  });

  // Score sentences
  let scored = sentences.map(sentence => {
    let score = 0;
    let sWords = sentence.toLowerCase().split(/\W+/);

    sWords.forEach(w => {
      if (freq[w]) score += freq[w];
    });

    return { sentence, score };
  });

  // Sort by score
  scored.sort((a, b) => b.score - a.score);

  // Take top 3 sentences
  let summaryArr = scored.slice(0, 3);

  // Sort back to original order
  summaryArr.sort((a, b) =>
    sentences.indexOf(a.sentence) - sentences.indexOf(b.sentence)
  );

  let summary = summaryArr.map(s => s.sentence).join(". ") + ".";

  document.getElementById("output").innerText = summary;

  // Stats
  const originalWords = words.length;
  const summaryWords = summary.split(" ").length;

  document.getElementById("stats").innerText =
    `Words: ${originalWords} → ${summaryWords}`;
}

// Copy
function copyText() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}