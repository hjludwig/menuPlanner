import React from "react";
import Day from "./Day";
import { mealsArchive } from "../../data";
import { MealsContext } from "../../context/meals-context";

const Menu = () => {
    const classes = {
        wrapper: "mt-40 flex flex-col min-h-screen bg-gray-50",
        innerWrapper: "grid grid-cols-7 gap-5 mx-5 my-9",
        heading:
            "mb-10 text-5xl text-gray-600 font-black uppercase text-center",
    };

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.heading}>Weekly Meal Plan</h2>
            <div className={classes.innerWrapper}>
                <MealsContext.Provider value={mealsArchive}>
                    <Day day="Monday" />
                    <Day day="Tuesday" />
                    <Day day="Wednesday" />
                    <Day day="Thursday" />
                    <Day day="Friday" />
                    <Day day="Saturday" />
                    <Day day="Sunday" />
                </MealsContext.Provider>
            </div>
        </div>
    );
};

export default Menu;
