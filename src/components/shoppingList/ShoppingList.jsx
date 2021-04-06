import React, { useState } from "react";
import { groceriesArchive } from "../../data";
import AddItem from "./AddItem";
import Item from "./Item";

const ShoppingList = () => {
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

    const removeItem = currentItem => {
        const newList = shoppingList.filter(item => item.name !== currentItem);
        setShoppingList(newList);
    };

    const classes = {
        wrapper: "flex flex-col justify-center items-center my-20",
        heading:
            "mb-10 text-5xl text-gray-600 font-black uppercase text-center",
        list: "mb-8",
    };
    return (
        <div className={classes.wrapper}>
            {showModal && (
                <AddItem
                    setShowModal={setShowModal}
                    handleSelection={handleSelection}
                />
            )}
            <h1 className={classes.heading}>Shopping List</h1>
            <ul className={classes.list}>
                {shoppingList.map(item => (
                    <Item name={item.name} removeItem={removeItem} />
                ))}
            </ul>
            <button className="btn-primary" onClick={handleClick}>
                Add item
            </button>
        </div>
    );
};

export default ShoppingList;
