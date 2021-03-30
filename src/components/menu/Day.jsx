import React, { useState } from "react";
import AddMeal from "../modals/AddMeal";
import Meal from "./Meal";

const classes = {
    wrapper: "p-5 border border-gray-200",
    title: "text-2xl",
};

const Day = ({ day }) => {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>{day}</h3>
            <div>
                <Meal name={"Lunch"} />
                <Meal name={"Dinner"} />
            </div>
        </div>
    );
};

export default Day;
