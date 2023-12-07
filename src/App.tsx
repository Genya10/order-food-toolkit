import React from 'react';
import './App.css';
import { RecipeItem } from './recipe-item/RecipeItem';
import { Header } from './header/Header';
import { useGetRecipesQuery } from './api/api';
import { CreateRecipe } from './create-recipe/CreateRecipe';

function App() {

  const {isLoading,data} = useGetRecipesQuery(null);

  return (
    <div className="App">
      <Header />
      <CreateRecipe/>
      {isLoading 
      ? ( <h2>Loading...</h2>)
       :data 
      ? (data.map((recipe:any)=>{
        return <RecipeItem key={recipe.id} recipe={recipe}/>})
        )
        :(<div>Not found</div> )    
      }
    </div>
  );
}

export default App;
