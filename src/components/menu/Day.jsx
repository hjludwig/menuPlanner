import React from "react";

const Day = ({ day }) => {
    return (
        <div>
            <h3 className="text-2xl">{day}</h3>
            <div>Meals</div>
            <button type="button" className="btn-primary">
                Add
            </button>
        </div>
    );
};

export default Day;
