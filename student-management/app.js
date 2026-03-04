document.addEventListener("DOMContentLoaded", loadStudents);

document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const marks = document.getElementById("marks").value;

    const student = { name, roll, marks };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    addStudentToTable(student);
    this.reset();
});

function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(addStudentToTable);
}

function addStudentToTable(student) {
    const table = document.getElementById("studentList");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.marks}</td>
        <td><button onclick="deleteStudent('${student.roll}', this)">Delete</button></td>
    `;

    table.appendChild(row);
}

function deleteStudent(roll, btn) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter(student => student.roll !== roll);
    localStorage.setItem("students", JSON.stringify(students));

    btn.parentElement.parentElement.remove();
}