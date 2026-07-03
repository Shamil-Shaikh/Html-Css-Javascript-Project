function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  showThinking(text);
}

function addMessage(text, type) {
  const box = document.getElementById("chatBox");

  const div = document.createElement("div");
  div.classList.add("msg", type);
  div.innerText = text;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function showThinking(userText) {
  const box = document.getElementById("chatBox");

  const thinking = document.createElement("div");
  thinking.classList.add("msg", "bot");
  thinking.innerText = "🤖 Thinking...";
  box.appendChild(thinking);

  setTimeout(() => {
    thinking.remove();
    fakeTyping(generateReply(userText));
  }, 1500);
}

function fakeTyping(reply) {
  const box = document.getElementById("chatBox");

  const div = document.createElement("div");
  div.classList.add("msg", "bot");
  box.appendChild(div);

  let i = 0;

  const interval = setInterval(() => {
    div.innerText += reply[i];
    i++;

    if (i >= reply.length) {
      clearInterval(interval);
    }
  }, 30);
}

function generateReply(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hi there! 😊";
  if (input.includes("how are you")) return "I'm just code, but I'm doing great 😎";
  if (input.includes("name")) return "I'm your fake AI 🤖";
  if (input.includes("bye")) return "Goodbye! 👋";

  return "Interesting... tell me more 🤔";
}