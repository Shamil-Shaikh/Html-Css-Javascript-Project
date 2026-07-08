let points = JSON.parse(localStorage.getItem("heatmap")) || [];

const area = document.getElementById("area");

// Track mouse movement
area.addEventListener("mousemove", (e) => {
  const rect = area.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  points.push({ x, y });

  // limit data
  if (points.length > 1000) points.shift();

  localStorage.setItem("heatmap", JSON.stringify(points));
});

// Show heatmap
function showHeatmap() {
  area.innerHTML = "";

  points.forEach(p => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.style.left = p.x + "px";
    dot.style.top = p.y + "px";

    area.appendChild(dot);
  });
}

// Clear data
function clearData() {
  points = [];
  localStorage.removeItem("heatmap");
  area.innerHTML = "";
}