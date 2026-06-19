const chatBox = document.getElementById("chatBox");

function analyze() {
  const input = document.getElementById("input");
  const text = input.value;

  if (!text) return;

  addMessage(text, "user");

  // Fake AI Logic 😏
  let lieScore = 0;

  const suspiciousWords = ["always", "never", "honestly", "trust me", "100%"];

  suspiciousWords.forEach(word => {
    if (text.toLowerCase().includes(word)) {
      lieScore += 20;
    }
  });

  // Random factor
  lieScore += Math.floor(Math.random() * 50);

  let result, confidence;

  if (lieScore > 50) {
    result = "🤥 Lie detected!";
    confidence = lieScore;
  } else {
    result = "✅ Truth detected!";
    confidence = 100 - lieScore;
  }

  setTimeout(() => {
    addMessage(`${result} (Confidence: ${confidence}%)`, "bot");
  }, 800);

  input.value = "";
}

function addMessage(msg, type) {
  const div = document.createElement("div");
  div.classList.add("message", type);
  div.innerText = msg;

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}