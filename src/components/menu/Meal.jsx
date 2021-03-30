import React, { useState } from "react";
import AddMeal from "../modals/AddMeal";

const Meal = ({ name }) => {
    const [meals, setMeals] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSelection = e => {
        const selection = e.target.value;
        setMeals([...meals, selection]);
        console.log("Meals: ", meals);
        setShowModal(false);
    };

    const classes = {
        title: "text-xl mt-8",
    };

    return (
        <div>
            {showModal && (
                <AddMeal
                    setShowModal={setShowModal}
                    handleSelection={handleSelection}
                />
            )}
            <h3 className={classes.title}>{name}</h3>
            <ul>
                {meals.map(meal => (
                    <li>{meal}</li>
                ))}
            </ul>
            <button
                type="button"
                className="btn-primary"
                onClick={() => setShowModal(true)}
            >
                Add
            </button>
        </div>
    );
};

export default Meal;
