import React, { useState } from "react";
import "./App.css";
import { RecipeItem } from "./recipe-item/RecipeItem";
import { Header } from "./header/Header";
import { useGetRecipesQuery } from "./api/api";
import { CreateRecipe } from "./create-recipe/CreateRecipe";
import { Search } from "./Search/Search";

function App() {
  const [querySearch, setQuerySearch] = useState("");
  const { isLoading, data } = useGetRecipesQuery(querySearch);
  const handlerSearch = (search: string) => {
    setQuerySearch(search);
  };

  return (
    <div className="App">
      <Header />
      <CreateRecipe />
      <Search handlerSearch={handlerSearch} />

      {isLoading ? (
        <h2>Loading...</h2>
      ) : data ? (
        data.map((recipe: any) => {
          return <RecipeItem key={recipe.id} recipe={recipe} />;
        })
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
}

export default App;
