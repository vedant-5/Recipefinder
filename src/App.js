import React ,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Recipe from "./components/Recipe";
import Navbar from "./components/Navbar";
import Home from "./Home";
import "./App.css";
import "./components/Recipe.css";
//import Recipepage from "./Recipepage";
import Ingredient from "./components/Ingredient";
import Recipelist from "./components/Recipelist";
import Recipepage from "./Recipepage";

function App() {

  const [recipes, setRecipes] = useState([]);
  
  return (
    <div>
      <Navbar />
      <Router>
        <Recipepage recipes={recipes} setRecipes={setRecipes}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact>
            <Recipelist recipes={recipes} setRecipes={setRecipes}/>
          </Route>
          <Route path="/recipes/:id" component={Ingredient} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//<Route path="/recipes" component={Recipepage} />

////CUPCAKE CONSTANT ON LANDING PAGE

//const [cakes, setCake] = useState([]);

//useEffect(() => {
//  cupcake();
//});

//const cupcake = async () => {
//const res = await fetch(
//`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${cupcake}`
//);
//const cakeData = await res.json();
//const cupcakeRecipe = cakeData.recipes;
//setCake(cupcakeRecipe);
//console.log(setCake);
//};

//<div>
//       {cakes.map((cake) => (
//       <Cupcake
//       key={cake._id}
//     title={cake.title}
//   image_url={cake.image_url}
///>
//   ))}
//</div>

//const Cupcake = (title, image_url, _id) => (
// <div key={_id}>
// <h1>{title}</h1>
//<img src={image_url} alt="cups" />
//</div>
//);
