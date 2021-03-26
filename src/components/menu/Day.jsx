import React, { useState } from "react";
import AddMeal from "../modals/AddMeal";

const classes = {
    wrapper: "p-5 border border-gray-200",
    title: "text-2xl",
};

const Day = ({ day }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={classes.wrapper}>
            {showModal && <AddMeal setShowModal={setShowModal} />}
            <h3 className={classes.title}>{day}</h3>
            <div>
                <div>
                    <h3>Lunch</h3>
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={() => setShowModal(true)}
                    >
                        Add
                    </button>
                </div>
                <div>
                    <h3>Dinner</h3>
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={() => setShowModal(true)}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Day;
