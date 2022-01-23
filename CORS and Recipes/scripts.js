const base = 'https://www.themealdb.com/api/json/v1/1/search.php'
const proxy = `https://cors-anywhere.herokuapp.com/`
const form = document.querySelector('form.search');
const mealsGrid = document.querySelector('.mealsgrid');

async function fetchMeals(query) {
  const res = await fetch(`${proxy}${base}?f=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(e) {
  e.preventDefault();
  const el = e.currentTarget;
  console.log(el.query.value);
  fetchAndDisplay(form.query.value)
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const searchMeals = await fetchMeals(query);
  console.log(searchMeals);
  form.submit.disabled = false;
  displayMeals(searchMeals.meals);
}

function displayMeals(searchMeals) {
  const html = searchMeals.map(
    meal => `<div class="meal">
    <h2>${meal.strMeal}</h2>
    <p>${meal.strInstructions}</p>
    ${meal.strMealThumb &&
      `<img src="${meal.strMealThumb}" alt="${meal.idMeal}"/>`}
    <a href="${meal.strYoutube}">View Recipe →</a>
    </div>`
  )
  mealsGrid.innerHTML = html.join('');
}


form.addEventListener('submit',handleSubmit);

fetchAndDisplay('a');