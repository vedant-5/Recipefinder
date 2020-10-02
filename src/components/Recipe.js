import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";

function Recipe({ recipe_id, title, image_url, link }) {
  return (
    <div className="recipeTile" key={recipe_id}>
      <img className="recipeImage" src={image_url} alt="beautiful" />
      <h1 className="recipeTitle">{title}</h1>
      <Link to={`/recipes/${link}`}>
        <p>Go to recipe</p>
      </Link>
    </div>
  );
}
export default Recipe;
