import cl from './RecipeItem.module.css';

export const RecipeItem=({recipe})=>{
  return(
    <div className={cl.recipeItem}>
        <h2>{recipe.name}</h2>
        <button>Add to favotites</button>
    </div>
  )
}