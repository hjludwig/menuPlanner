import React, { useContext, useState } from "react";
import { GroceriesContext } from "../../context/groceries-context";
import { groceriesArchive } from "../../data";
import AddItem from "./AddItem";

const ShoppingList = () => {
    const groceries = useContext(GroceriesContext);
    const [shoppingList, setShoppingList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleSelection = e => {
        const selection = e.target.value;
        const theItem = groceriesArchive.find(item => item.name === selection);
        setShoppingList([...shoppingList, theItem]);

        setShowModal(false);
    };
    return (
        <div>
            {showModal && (
                <AddItem
                    setShowModal={setShowModal}
                    handleSelection={handleSelection}
                />
            )}
            <h1>Shopping List</h1>
            <ul>
                {shoppingList.map(item => (
                    <li>{item.name}</li>
                ))}
            </ul>
            <button className="btn-primary" onClick={handleClick}>
                Add item
            </button>
        </div>
    );
};

export default ShoppingList;
