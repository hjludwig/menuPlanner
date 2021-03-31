import React, { useState } from "react";
import AddMeal from "../modals/AddMeal";
import { FaPlus } from "react-icons/fa";

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
        wrapper: "my-8 pb-8 border-b last:border-b-0",
        title: "text-l mb-3 uppercase text-gray-400",
        button: "p-1 bg-gray-400 text-white rounded-full",
    };

    return (
        <div className={classes.wrapper}>
            {showModal && (
                <AddMeal
                    setShowModal={setShowModal}
                    handleSelection={handleSelection}
                />
            )}
            <h3 className={classes.title}>{name}</h3>
            <button
                title="Add"
                type="button"
                className={classes.button}
                onClick={() => setShowModal(true)}
            >
                <FaPlus />
            </button>
            <ul>
                {meals.map(meal => (
                    <li>{meal}</li>
                ))}
            </ul>
        </div>
    );
};

export default Meal;
