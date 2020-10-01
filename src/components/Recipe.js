import React from "react";
import "./Recipe.css";

function Recipe({ _id, title, image_url }) {
  return (
    <div className="recipeTile" key={_id}>
      <img className="recipeImage" src={image_url} alt="beautiful" />
      <h1 className="recipeTitle">{title}</h1>
    </div>
  );
}
export default Recipe;
