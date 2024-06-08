import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function Finder() {
  const [meal, setMeal] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchAPI(query) {
    setLoading(true);
    setError("");
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    try {
      let response = await fetch(URL);
      let result = await response.json();
      setLoading(false);
      if (result.meals) {
        const meal = result.meals[0];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient) {
            ingredients.push(`${ingredient} - ${measure}`);
          }
        }
        setRecipe({ ...meal, ingredients });
      } else {
        setError("Sorry! Couldn't find the Recipe!");
      }
    } catch (e) {
      setLoading(false);
      setError("Failed to fetch data. Please try again later.");
    }
  }

  function handleChange(e) {
    setMeal(e.target.value);
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-screen bg-gray-800 p-4">
      {!recipe ? (
        <>
          <h1 className="text-4xl font-bold text-gray-50 mb-8">
            Search your <span className="text-yellow-600">Recipes</span>
          </h1>
          <div className="flex flex-col items-center w-full max-w-md">
            <input
              onChange={handleChange}
              value={meal}
              type="text"
              placeholder="Search"
              className="bg-white text-gray-800 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150 w-full mb-4"
            />
            <button
              onClick={() => fetchAPI(meal)}
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition-all duration-150 hover:bg-yellow-700"
            >
              {loading ? "Loading..." : "Search"}
            </button>
            {error && (
              <p className="mt-4 text-red-500 text-center">{error}</p>
            )}
          </div>
        </>
      ) : (
        <>
          <RecipeCard
            dish={recipe.strMeal}
            instructions={recipe.strInstructions}
            ingredients={recipe.ingredients}
          />
          <button
            onClick={() => setRecipe(null)}
            className="mt-4 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 transition-all duration-150 hover:bg-yellow-700"
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
}
