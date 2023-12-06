import cl from './RecipeItem.module.css';
import { useSelector} from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useSelectorFav } from '../hooks/useSelectorFav';

export const RecipeItem=({recipe})=>{
   
    const {favorites} = useSelectorFav();
    const {toggleFavorites} = useActions();
    const isExists = favorites.some(r => r.id === recipe.id)

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