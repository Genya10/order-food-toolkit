import React,{useState} from 'react';
import './App.css';
import { RecipeItem } from './recipe-item/RecipeItem';
import { Header } from './header/Header';
import { useGetRecipesQuery } from './api/api';
import { CreateRecipe } from './create-recipe/CreateRecipe';

function App() {
  
  const [search,setSearch]=useState('');
  const [isSearch,setIsSearch] = useState('');
  const {isLoading,data} = useGetRecipesQuery(search);
  const handlerSearch=()=>{
   setIsSearch(search)
  }

  return (
    <div className="App">
      <Header />
      <CreateRecipe/>
      <div style={{padding:10}}>
        <p>If you wanna find:</p>
        <div>
        <input 
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Enter search"/>
            <button onClick={handlerSearch}>Search</button>
          </div>
      </div>
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
