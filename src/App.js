import Menu from "./components/menu/Menu";
import Recipe from "./components/recipe/Recipe";
import ShoppingList from "./components/shoppingList/ShoppingList";
import { GroceriesContext } from "./context/groceries-context";
import { groceriesArchive } from "./data";

function App() {
    return (
        <div className="App">
            <GroceriesContext.Provider value={groceriesArchive}>
                {/* <Menu /> */}
                <ShoppingList />
            </GroceriesContext.Provider>
        </div>
    );
}

export default App;
