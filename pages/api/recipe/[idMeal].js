// pages/recipe/[idMeal].js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchRecipeById } from '../../lib/api'; // Ensure this function is defined in your API

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const router = useRouter();
  const { idMeal } = router.query;

  useEffect(() => {
    if (idMeal) {
      const fetchData = async () => {
        const recipeData = await fetchRecipeById(idMeal);
        setRecipe(recipeData);
      };
      fetchData();
    }
  }, [idMeal]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
