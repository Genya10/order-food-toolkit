import cl from './RecipeItem.module.css';
import { useSelector} from 'react-redux';
import { actions } from '../store/favorites/favorites';
import { useActions } from '../hooks/useActions';

export const RecipeItem=({recipe})=>{
    const {favorites} = useSelector(state => state);
    //console.log(favorites);
    const {toggleFavorites} = useActions();
    const isExists = favorites.some(r => r.id === recipe.id)

  return(
    <div className={cl.recipeItem}>
        <h2>{recipe.name}</h2>
        <button onClick={()=>toggleFavorites(recipe)}>
          {isExists  ? 'Remove from': 'Add to'} favorites</button>
    </div>
  )
}