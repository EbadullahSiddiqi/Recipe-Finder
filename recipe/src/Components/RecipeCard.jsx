import React from "react";

export default function RecipeCard({ dish, instructions, ingredients }) {
  return (
    <div className="scrollbar-custom mt-4 bg-gray-100 w-1/2 h-3/5 p-3 text-center rounded-3xl flex flex-col gap-2 overflow-auto">
      <p className="text-2xl text-gray-800 font-semibold">{dish}</p>
      <h3 className="text-xl text-gray-800 font-semibold">Ingredients</h3>
      <ul className="text-left list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-800">
            {ingredient}
          </li>
        ))}
      </ul>
      <h3 className="text-xl text-gray-800 font-semibold mt-4">Instructions</h3>
      <p className="text-gray-800">{instructions}</p>
    </div>
  );
}
