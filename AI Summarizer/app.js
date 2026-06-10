function summarize() {
  const text = document.getElementById("inputText").value;

  if (!text) return alert("Enter text first!");

  // Split into sentences
  let sentences = text.split(".");

  // Remove empty
  sentences = sentences.filter(s => s.trim().length > 0);

  // Take first 2-3 sentences
  let summary = sentences.slice(0, 3).join(". ") + ".";

  document.getElementById("output").innerText = summary;

  // Stats
  const originalWords = text.split(" ").length;
  const summaryWords = summary.split(" ").length;

  document.getElementById("stats").innerText =
    `Words: ${originalWords} → ${summaryWords}`;
}

function copyText() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}