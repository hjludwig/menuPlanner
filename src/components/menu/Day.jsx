import React, { useState } from "react";
import AddMeal from "../modals/AddMeal";
import Meal from "./Meal";

const classes = {
    wrapper: "border border-gray-200 bg-white",
    innerWrapper: "px-5",
    title: "p-5 text-2xl border-b border-gray-200",
};

const Day = ({ day }) => {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>{day}</h3>
            <div className={classes.innerWrapper}>
                <Meal name={"Lunch"} />
                <Meal name={"Dinner"} />
            </div>
        </div>
    );
};

export default Day;
