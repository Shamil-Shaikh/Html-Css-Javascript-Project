const moods = {

  calm: {
    emoji: "🌊",
    title: "Calm Mode",
    message: "Take a breath. Slow down and enjoy the moment.",
    level: 60,
    background: "#06364a"
  },

  energy: {
    emoji: "⚡",
    title: "Energy Mode",
    message: "Let's go! Turn your energy into something productive.",
    level: 95,
    background: "#4a1706"
  },

  focus: {
    emoji: "🎯",
    title: "Focus Mode",
    message: "Remove distractions. One task. One goal.",
    level: 85,
    background: "#172554"
  },

  night: {
    emoji: "🌙",
    title: "Night Mode",
    message: "Everything is quiet. This is your peaceful space.",
    level: 35,
    background: "#09090b"
  }

};

function changeMood(moodName) {

  const mood = moods[moodName];

  document.body.style.background = mood.background;

  document.getElementById("emoji").innerText =
    mood.emoji;

  document.getElementById("title").innerText =
    mood.title;

  document.getElementById("message").innerText =
    mood.message;

  document.getElementById("level").innerText =
    mood.level + "%";

  document.getElementById("bar").style.width =
    mood.level + "%";

  createParticles();
}

function createParticles() {

  const container = document.getElementById("particles");

  container.innerHTML = "";

  for (let i = 0; i < 25; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.animationDelay =
      Math.random() * 5 + "s";

    particle.style.animationDuration =
      3 + Math.random() * 5 + "s";

    container.appendChild(particle);
  }
}

createParticles();