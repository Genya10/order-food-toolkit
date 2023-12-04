import cl from './RecipeItem.module.css';
import { useSelector } from 'react-redux';

export const RecipeItem=({recipe})=>{
    const {favorites} = useSelector(state => state)
    console.log(favorites)
  return(
    <div className={cl.recipeItem}>
        <h2>{recipe.name}</h2>
        <button>Add to favotites</button>
    </div>
  )
}