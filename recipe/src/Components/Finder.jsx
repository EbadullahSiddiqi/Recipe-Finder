import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function Finder() {
  const [meal, setMeal] = useState("");
  const [recipe, setRecipe] = useState(null);

  async function fetchAPI(query) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    let response = await fetch(URL);
    let result = await response.json();
    if (result.meals) {
      setRecipe(result.meals[0]);
    }
  }

  function handleChange(e) {
    setMeal(e.target.value);
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-screen">
      {!recipe ? (
        <>
          <label className="flex">
            <input
              onChange={handleChange}
              value={meal}
              type="text"
              placeholder="Search"
              className="bg-white text-gray-800 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150 w-full max-w-md"
            />
          </label>
          <label>
            <button
              onClick={() => fetchAPI(meal)}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150"
            >
              Click Me
            </button>
          </label>
        </>
      ) : (
        <RecipeCard
          dish={recipe.strMeal}
          instructions={recipe.strInstructions}
        />
      )}
    </div>
  );
}
