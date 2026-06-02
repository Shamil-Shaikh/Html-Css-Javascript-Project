async function getUser(){

  const response =
    await fetch(
      "https://randomuser.me/api/"
    );

  const data =
    await response.json();

  const user =
    data.results[0];

  document.getElementById("avatar")
    .src = user.picture.large;

  document.getElementById("name")
    .innerText =
    `${user.name.first}
     ${user.name.last}`;

  document.getElementById("email")
    .innerText =
    user.email;

  document.getElementById("country")
    .innerText =
    user.location.country;
}

getUser();