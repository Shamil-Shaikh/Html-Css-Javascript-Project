function generateResume() {

  let name = document.getElementById("name").value;
  let skills = document.getElementById("skills").value;
  let education = document.getElementById("education").value;

  document.getElementById("rName").innerText = name || "Your Name";

  document.getElementById("rSkills").innerText = skills;

  document.getElementById("rEducation").innerText = education;
}