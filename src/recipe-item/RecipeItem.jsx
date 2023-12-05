import cl from './RecipeItem.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { actions } from '../store/favorites/favorites';

export const RecipeItem=({recipe})=>{
    const {favorites} = useSelector(state => state);
    //console.log(favorites);
    const dispatch = useDispatch();

    const isExists = favorites.some(r => r.id === recipe.id)

  return(
    <div className={cl.recipeItem}>
        <h2>{recipe.name}</h2>
        <button onClick={()=>dispatch(actions.toggleFavorites(recipe))}>
          {isExists  ? 'Remove from': 'Add to'} favorites</button>
    </div>
  )
}