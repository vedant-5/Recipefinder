import React from "react";
import Recipe from  "./Recipe";
import "./Recipe.css";

function Recipelist({recipes}) {

  return (
    <div className="defaultSearch">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe._id}
            title={recipe.title}
            image_url={recipe.image_url}
            link={recipe.recipe_id}
          />
        ))}
      </div>
  )
  
}

export default Recipelist;
