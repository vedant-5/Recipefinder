import React, { useState, useEffect } from "react";
import Recipepage from "./Recipepage";
import "./App.css";
import "./components/Recipe.css";

function Home() {
  const [cupcake, setcake] = useState([]);
  const query = "cupcake";

  useEffect(() => {
    getCupcake();
  }, [query]);

  const getCupcake = async () => {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${query}`
    );

    const data = await res.json();
    const cupcakeData = data.recipes;
    setcake(cupcakeData);
    console.log(cupcakeData);
  };

  return (
    <div>
      <Recipepage />
      <div className="defaultSearch">
        {cupcake.slice(0, 5).map((cake) => (
          <div key={cake._id}>
            <h1 className="recipeImage">{cake.title}</h1>
            <img className="recipeTitle" src={cake.image_url} alt="cupcakes" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
