import React from 'react';
import cl from './RecipeItem.module.css';
import { useActions } from '../hooks/useActions';
import { useSelectorFav } from '../hooks/useSelectorFav';
import { IRecipe } from '../types/recipe-types';

interface IRecipeItem {
  recipe:IRecipe
}

export const RecipeItem=({recipe}:IRecipeItem)=>{
   
    const {favorites} = useSelectorFav();
    const {toggleFavorites} = useActions();
    const isExists = favorites.some((r:IRecipe) => r.id === recipe.id)

  return (
    <div className={cl.recipeItem}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt="photo" width={200}/>
      <div>
        <button onClick={() => toggleFavorites(recipe)}>
          {isExists ? "Remove from" : "Add to"} favorites
        </button>
      </div>
    </div>
  );
}