import React, { useState } from "react";
import AddMeal from "../modals/AddMeal";
import { FaPlus, FaPlusCircle, FaTimes } from "react-icons/fa";
import { mealsArchive } from "../../data";

const Meal = ({ name }) => {
    const [meals, setMeals] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSelection = e => {
        const selection = e.target.value;
        const theMeal = mealsArchive.find(meal => meal.name === selection);
        setMeals([...meals, theMeal]);

        setShowModal(false);
    };

    const classes = {
        wrapper: "my-8 pb-8 border-b last:border-b-0 relative",
        title: "text-l mb-3 uppercase text-gray-400",
        button:
            "p-1 bg-gray-400 text-white rounded-full absolute top-0 right-0",
        removeButton: "text-gray-400 uppercase text-xs mx-1",
        defaultText: "text-gray-300",
        defaultIcon: "inline",
        mealLink: "hover:pretty-underline",
    };

    const removeItem = meal => {
        console.log(meal);
        const newMeals = meals.filter(item => item.name !== meal.name);
        setMeals(newMeals);
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
            {meals.length === 0 ? (
                <p className={classes.defaultText}>Nothing scheduled</p>
            ) : (
                <ul>
                    {meals.map(meal => (
                        <li key={meal.uuid}>
                            <a
                                className={classes.mealLink}
                                href={meal.url}
                                target="blank"
                            >
                                {meal.name}
                            </a>
                            <button
                                className={classes.removeButton}
                                onClick={() => removeItem(meal)}
                            >
                                <FaTimes />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Meal;
