import React from "react";
import { useState } from "react";
import "./App.css";
import RecipeList from "./Component/RecipeList";

function App() {
  const [query, setQuery] = useState("");
  const [recipesData, setRecipesData] = useState([]);

  const Application_ID = "c471375a";
  const Application_Keys = "8fcd5a0fda1c7aeddd079c5ced385cdb";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${Application_ID}&app_key=${Application_Keys}&&health=alcohol-free`;

  const getRecipes = (e) => {
    e.preventDefault();
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        setRecipesData(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // if(recipesData.length !== 0){
  //   return <div>Loading</div>
  // }
  return (
    <div className="App">
      <h2> 🍝 My CookBook 🍔</h2>

      <form>
        <input
          className="input-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          className="input-submit"
          type="submit"
          onClick={getRecipes}
          value="Search"
        />
      </form>

      {recipesData && <RecipeList recipesData={recipesData.hits} />}
    </div>
  );
}

export default App;
