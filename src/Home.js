import React, { useState, useEffect } from "react";
import Recipepage from "./Recipepage";
import "./App.css";
import "./components/Recipe.css";

import { Link } from "react-router-dom";

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
      <div className="cupCake">
        {cupcake.slice(0, 6).map((cake) => (
          <div key={cake._id}>
            <img className="cakeImage" src={cake.image_url} alt="cupcakes" />
            <h1 className="cakeTitle">{cake.title}</h1>
            <Link to={`/recipes/${cake.recipe_id}`}>
              <p>Go to recipe</p>
            </Link>
          </div>
        ))}
        
      </div>
    </div>
  );
}


export default Home;
