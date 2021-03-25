import Menu from "./components/menu/Menu";
import Recipe from "./components/recipe/Recipe";
import ShoppingList from "./components/shoppingList/ShoppingList";

function App() {
    return (
        <div className="App">
            <p>My app</p>
            <Menu />
            <Recipe />
            <ShoppingList />
        </div>
    );
}

export default App;
