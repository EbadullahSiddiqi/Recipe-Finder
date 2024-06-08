import React from "react";

export default function RecipeCard(props) {
  return (
    <>
      <div
        className="scrollbar-custom mt-4 bg-gray-100 w-1/2 h-3/5 p-3 text-center rounded-3xl flex flex-col gap-2 overflow-auto
        "
      >
        <p className="text-2xl text-gray-800 font-semibold">{props.dish}</p>
        <p>{props.instructions}</p>
      </div>

      
    </>
  );
}
