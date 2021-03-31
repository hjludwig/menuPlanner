import React, { useContext } from "react";
import { MealsContext } from "../../context/meals-context";

const classes = {
    wrapper:
        "fixed flex flex-col w-full h-screen items-center justify-center bg-white top-0 left-0 z-10",
    select: "m-8",
};

const AddMeal = ({ setShowModal, handleSelection }) => {
    const meals = useContext(MealsContext);
    return (
        <div className={classes.wrapper}>
            <select
                className={classes.select}
                onChange={e => handleSelection(e)}
            >
                <option value="" disabled selected>
                    Choose a dish...
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
