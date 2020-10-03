import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import { Link } from "react-router-dom";
import searchImage from "./search.svg";

function Recipepage() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState();

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${query}`
    );
    const data = await response.json();
    const recipeData = data.recipes;
    setRecipes(recipeData);
    console.log(recipeData);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(search);
  };

  return (
    <div>
      <img src={searchImage} alt="apples" className="apple" />
      <div className="searchSection">
        <form onSubmit={getSearch} className="searchForm">
          <input
            placeholder="Find your Recipes..."
            value={search}
            onChange={updateSearch}
            type="/text"
            className="searchBar"
          />

          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
      </div>

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
    </div>
  );
}

export default Recipepage;
