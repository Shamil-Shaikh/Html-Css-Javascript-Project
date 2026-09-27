const message = document.getElementById("message");
const result = document.getElementById("result");
const statusText = document.getElementById("status");

function encodeMessage() {
  const text = message.value.trim();

  if (text === "") {
    showStatus("Please enter a message!");
    return;
  }

  try {
    const encoded = btoa(unescape(encodeURIComponent(text)));

    result.textContent = encoded;
    showStatus("Message encoded 🔒");
  } catch (error) {
    showStatus("Something went wrong!");
  }
}

function decodeMessage() {
  const text = message.value.trim();

  if (text === "") {
    showStatus("Please enter encoded text!");
    return;
  }

  try {
    const decoded = decodeURIComponent(
      escape(atob(text))
    );

    result.textContent = decoded;
    showStatus("Message decoded 🔓");
  } catch (error) {
    result.textContent = "Invalid encoded message!";
    showStatus("Could not decode ❌");
  }
}

function copyText() {
  const text = result.textContent;

  if (
    text === "" ||
    text === "Your result will appear here..."
  ) {
    showStatus("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(text);
  showStatus("Copied to clipboard 📋");
}

function clearBox() {
  message.value = "";
  result.textContent = "Your result will appear here...";
  statusText.textContent = "";
}

function showStatus(text) {
  statusText.textContent = text;

  setTimeout(() => {
    statusText.textContent = "";
  }, 2000);
}