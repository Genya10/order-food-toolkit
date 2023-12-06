import './App.css';
import { RecipeItem } from './recipe-item/RecipeItem';
import { Header } from './header/Header';
import { useGetRecipesQuery } from './api/api';

function App() {

  const {isLoading,data}=useGetRecipesQuery();
  console.log(data);

  return (
    <div className="App">
      <Header />
      {isLoading 
      ? ( <h2>Loading...</h2>)
       :data 
      ? (data.map((recipe)=>{
        return <RecipeItem key={recipe.id} recipe={recipe}/>})
        )
        :(<div>Not found</div> )    
      }
    </div>
  );
}

export default App;
