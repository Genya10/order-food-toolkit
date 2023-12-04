import './App.css';
import { RecipeItem } from './recipe-item/RecipeItem';


function App() {
  return (
    <div className="App">
  <RecipeItem 
    recipe={{
      id:1,
      name:'Stew fish'
    }}/>
      <RecipeItem 
    recipe={{
      id:2,
      name:'Salad Cesar'
    }}/>
    </div>
  );
}

export default App;
