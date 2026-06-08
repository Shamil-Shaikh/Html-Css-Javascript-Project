const moods = {
  happy: {
    color: "#FFD93D",
    quote: [
      "Stay happy always!",
      "Smile is power 😄",
      "Happiness looks good on you!"
    ],
    music: "assets/happy.mp3"
  },
  sad: {
    color: "#4B7BE5",
    quote: [
      "It's okay to feel sad.",
      "Tough times pass.",
      "Stay strong 💙"
    ],
    music: "assets/sad.mp3"
  },
  angry: {
    color: "#FF6B6B",
    quote: [
      "Take a deep breath.",
      "Control your anger.",
      "Calm down 😤"
    ],
    music: "assets/angry.mp3"
  },
  relax: {
    color: "#6BCB77",
    quote: [
      "Relax and breathe.",
      "Peace of mind 🧘",
      "Stay calm and chill."
    ],
    music: "assets/relax.mp3"
  }
};

function setMood(mood) {
  const data = moods[mood];

  // Change background
  document.body.style.background = data.color;

  // Random quote
  const randomQuote = data.quote[Math.floor(Math.random() * data.quote.length)];
  document.getElementById("quote").innerText = randomQuote;

  // Music
  const music = document.getElementById("music");
  music.src = data.music;
  music.play();

  // Save mood
  localStorage.setItem("mood", mood);
}

// Load last mood
window.onload = () => {
  const savedMood = localStorage.getItem("mood");
  if (savedMood) {
    setMood(savedMood);
  }
};