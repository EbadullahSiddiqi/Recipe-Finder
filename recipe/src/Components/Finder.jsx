import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function Finder() {
  const [meal, setMeal] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchAPI(query) {
    setLoading(true);
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
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
      alert("Sorry! Couldn't find the Recipe!");
    }
  }

  function handleChange(e) {
    setMeal(e.target.value);
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-screen">
      {!recipe ? (
        <>
          <h1 className="font-2xl text-gray-100 font-medium">
            {" "}
            Search your <span className="text-yellow-600">Recipes</span>
          </h1>
          <label className="flex">
            <input
              onChange={handleChange}
              value={meal}
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150 w-full max-w-md"
            />
          </label>
          <label>
            <button
              onClick={() => fetchAPI(meal)}
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150"
            >
              {loading ? "Loading..." : "Click Me"}
            </button>
          </label>
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
            className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150"
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
}
