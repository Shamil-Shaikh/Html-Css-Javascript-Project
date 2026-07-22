let snippets = JSON.parse(localStorage.getItem("snippets")) || [];

// Detect language
function detectType(code) {
  if (code.includes("<") && code.includes(">")) return "HTML";
  if (code.includes("{") && code.includes("}")) return "CSS";
  if (code.includes("function") || code.includes("=>")) return "JavaScript";
  return "Unknown";
}

// Save snippet
function saveCode() {
  const code = document.getElementById("code").value;

  if (!code) return alert("Paste code first!");

  const type = detectType(code);

  snippets.push({ code, type });

  localStorage.setItem("snippets", JSON.stringify(snippets));

  alert("Saved as " + type);
}

// Search snippets
function searchCode() {
  const query = document.getElementById("search").value.toLowerCase();
  const results = document.getElementById("results");

  results.innerHTML = "";

  const filtered = snippets.filter(s =>
    s.code.toLowerCase().includes(query) ||
    s.type.toLowerCase().includes(query)
  );

  filtered.forEach(s => {
    const div = document.createElement("div");
    div.innerHTML = `<pre>${s.code}</pre><p>Type: ${s.type}</p>`;
    results.appendChild(div);
  });
}