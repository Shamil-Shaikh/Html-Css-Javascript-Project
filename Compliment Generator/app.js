const compliments = [
  "You have amazing potential! 🌟",
  "Your ideas are worth sharing! 💡",
  "You are improving every single day! 🚀",
  "Your consistency will take you far! 🔥",
  "You think differently — that's your strength! 🧠",
  "You can build something amazing! 💻",
  "Keep going, you're closer than you think! 🎯"
];

function newCompliment() {

  const randomIndex =
    Math.floor(Math.random() * compliments.length);

  document.getElementById("compliment").innerText =
    compliments[randomIndex];
}