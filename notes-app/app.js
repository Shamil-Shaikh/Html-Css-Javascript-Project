let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes(filteredNotes = notes) {
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";

  filteredNotes.forEach((note, index) => {
    let div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function addNote() {
  let input = document.getElementById("noteInput");
  let value = input.value;

  if (value === "") return;

  notes.push(value);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

function searchNotes() {
  let query = document.getElementById("search").value.toLowerCase();

  let filtered = notes.filter(note =>
    note.toLowerCase().includes(query)
  );

  renderNotes(filtered);
}

renderNotes();