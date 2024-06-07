import React, { useState } from "react";

export default function Finder() {

    const [meal, setMeal] = useState("");
    const [recipes, setRecipes] = useState([]);
    
    async function fetchAPI(query) {
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        let reponse = await fetch(URL);
        let result = reponse.json();
        await setRecipes(result.meals);
        console.log(recipes);
        return (
            <RecipeCard/>
        )
    }

    function handleChange(e) {
        setMeal(e.target.value)
    }

  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center h-screen w-screen">
        <label className="flex">
          <input
            onChange={handleChange}
            value={meal}
            type="text"
            placeholder= "Search"
            className="bg-white text-gray-800 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150 w-full max-w-md"
          />
        </label>
        <label>
          <button onClick={() => fetchAPI(meal)} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-150">
            Click Me
          </button>
        </label>
      </div>
    </>
  );
}
