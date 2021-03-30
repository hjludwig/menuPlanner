import React, { useContext } from "react";
import { MealsContext } from "../../context/meals-context";

const classes = {
    wrapper:
        "absolute flex flex-col w-full h-screen items-center justify-center bg-white top-0 left-0",
    select: "m-8",
};

const AddMeal = ({ setShowModal, handleSelection }) => {
    const meals = useContext(MealsContext);
    console.log("Context in modal: ", meals);
    return (
        <div className={classes.wrapper}>
            <select
                className={classes.select}
                onChange={e => handleSelection(e)}
            >
                <option value="" disabled selected hidden>
                    Choose a meal...
                </option>
                {meals.map(meal => (
                    <option value={meal.name}>{meal.name}</option>
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

export default AddMeal;
