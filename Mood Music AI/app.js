const moods = {
  happy: ["Happy - Pharrell", "Good Life - Kanye", "Best Day - Taylor"],
  sad: ["Let Her Go - Passenger", "Fix You - Coldplay", "Someone Like You - Adele"],
  angry: ["Stronger - Kanye", "Numb - Linkin Park", "Believer - Imagine Dragons"],
  chill: ["Sunflower - Post Malone", "Stay - Justin Bieber", "Peaches - JB"],
  motivated: ["Lose Yourself - Eminem", "Hall of Fame - The Script", "Power - Kanye"]
};

function detectMood(input) {
  input = input.toLowerCase();

  if (input.includes("happy") || input.includes("joy")) return "happy";
  if (input.includes("sad") || input.includes("cry")) return "sad";
  if (input.includes("angry") || input.includes("mad")) return "angry";
  if (input.includes("relax") || input.includes("calm")) return "chill";
  if (input.includes("motivate") || input.includes("focus")) return "motivated";

  return "chill"; // default fallback
}

function suggestMusic() {
  const input = document.getElementById("mood").value;
  const result = document.getElementById("result");

  result.innerHTML = "";

  const mood = detectMood(input);
  const songs = moods[mood];

  songs.forEach(song => {
    const li = document.createElement("li");
    li.innerText = "🎵 " + song;
    result.appendChild(li);
  });
}