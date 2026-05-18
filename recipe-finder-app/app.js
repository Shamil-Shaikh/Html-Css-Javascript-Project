async function getRecipes(){

  let query =
    document.getElementById("search").value;

  let url =
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  let response = await fetch(url);

  let data = await response.json();

  let recipes =
    document.getElementById("recipes");

  recipes.innerHTML = "";

  data.meals.forEach(meal => {

    recipes.innerHTML += `
      <div class="card">

        <img src="${meal.strMealThumb}">

        <h3>${meal.strMeal}</h3>

      </div>
    `;
  });
}