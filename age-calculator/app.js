function calculateAge() {

  let dob =
    document.getElementById("dob").value;

  if (dob === "") return;

  let birthDate = new Date(dob);

  let today = new Date();

  let years =
    today.getFullYear() -
    birthDate.getFullYear();

  let months =
    today.getMonth() -
    birthDate.getMonth();

  let days =
    today.getDate() -
    birthDate.getDate();

  if (days < 0) {
    months--;
    days += 30;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerHTML =
    `
    <h2>
      ${years} Years,
      ${months} Months,
      ${days} Days
    </h2>
  `;
}