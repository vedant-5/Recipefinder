import React, { useEffect, useState } from "react";
import "./ingredient.css";
import "./Recipe.css";

function Ingredient({ match }) {
  const [ingredients, setIngredients] = useState({
    title: "",
    ingredients: [],
    image_url: "",
    recipe_id: "",
  });

  useEffect(() => {
    fetchIngredients();
    console.log(match);
  }, []);

  const fetchIngredients = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${match.params.id}`
    );
    const data = await response.json();
    const recip = data.recipe;
    setIngredients(recip);
    console.log(recip);
  };

  return (
    <div className="ingredientPage">
      <div className="ingredientBox">
        <div className="imageBox">
          <img
            className="ingredientImage"
            src={ingredients.image_url}
            key={ingredients.recipe_id}
          />
        </div>
        <hr />
        <h1 className="ingredientHead">{ingredients.title}</h1>

        <div className="ingredentList">
          {ingredients.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredient;
