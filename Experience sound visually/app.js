
const visualizer = document.getElementById("visualizer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const statusText = document.getElementById("status");

let audioContext;
let analyser;
let microphone;
let animationId;
let stream;

const barCount = 50;
const bars = [];

// Create visualizer bars
for (let i = 0; i < barCount; i++) {
  const bar = document.createElement("div");

  bar.className = "bar";

  visualizer.appendChild(bar);
  bars.push(bar);
}

// Start microphone
async function startVisualizer() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });

    audioContext = new AudioContext();

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.8;

    microphone = audioContext.createMediaStreamSource(stream);

    microphone.connect(analyser);

    startBtn.disabled = true;
    stopBtn.disabled = false;

    statusText.textContent = "Listening... Speak or play sound! 🎤";

    animate();

  } catch (error) {
    statusText.textContent =
      "Microphone access denied or unavailable.";
  }
}

// Animate bars
function animate() {
  animationId = requestAnimationFrame(animate);

  const data = new Uint8Array(analyser.frequencyBinCount);

  analyser.getByteFrequencyData(data);

  bars.forEach((bar, index) => {
    const value = data[index];

    const height = Math.max(5, (value / 255) * 210);

    bar.style.height = height + "px";
  });
}

// Stop microphone
function stopVisualizer() {
  cancelAnimationFrame(animationId);

  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }

  bars.forEach(bar => {
    bar.style.height = "5px";
  });

  startBtn.disabled = false;
  stopBtn.disabled = true;

  statusText.textContent = "Visualizer stopped. ⏹";
}

startBtn.addEventListener("click", startVisualizer);
stopBtn.addEventListener("click", stopVisualizer);
