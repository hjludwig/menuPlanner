import React from "react";
import Day from "./Day";
import { mealsArchive } from "../../data";
import { MealsContext } from "../../context/meals-context";

const Menu = () => {
    const classes = {
        wrapper: "grid grid-cols-7 gap-5 mx-5 my-9",
    };

    return (
        <div>
            <h2 className="text-4xl">Weekly Schedule</h2>
            <div className={classes.wrapper}>
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
