import './App.css';
import { RecipeItem } from './recipe-item/RecipeItem';
import { Header } from './header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeItem
        recipe={{
          id: 1,
          name: "Stew fish",
        }}
      />
      <RecipeItem
        recipe={{
          id: 2,
          name: "Salad Cesar",
        }}
      />
    </div>
  );
}

export default App;
