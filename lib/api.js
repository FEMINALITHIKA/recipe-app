export async function fetchRecipes(query = '') {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
}

export async function fetchRecipeById(idMeal) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  const data = await res.json();
  return data.meals[0];
}
