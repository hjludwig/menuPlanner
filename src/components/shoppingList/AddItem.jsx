import React, { useContext } from "react";
import { GroceriesContext } from "../../context/groceries-context";
import { MealsContext } from "../../context/meals-context";

const classes = {
    wrapper:
        "fixed flex flex-col w-full h-screen items-center justify-center bg-white top-0 left-0 z-10",
    select: "m-8",
};

const AddItem = ({ setShowModal, handleSelection }) => {
    const groceries = useContext(GroceriesContext);
    return (
        <div className={classes.wrapper}>
            <select
                className={classes.select}
                onChange={e => handleSelection(e)}
            >
                <option value="" disabled selected>
                    Choose an item...
                </option>
                {groceries.map(item => (
                    <option value={item.name}>{item.name}</option>
                ))}
            </select>
            <button
                className="btn-primary"
                type="button"
                onClick={() => setShowModal(false)}
            >
                Close
            </button>
        </div>
    );
};

export default AddItem;
