import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const classes = {
    listItem: "flex justify-between p-2 border-b last:border-0",
    buttons: "ml-10",
    button: "text-gray-400 mx-0.5",
    completed: "text-gray-300 line-through",
};

const Item = ({ name, removeItem }) => {
    const [completed, setCompleted] = useState(false);

    return (
        <li
            className={
                completed
                    ? `${classes.listItem} ${classes.completed}`
                    : classes.listItem
            }
        >
            {name}
            <div className={classes.buttons}>
                <button
                    className={classes.button}
                    onClick={() => setCompleted(!completed)}
                >
                    <FaCheckCircle />
                </button>
                <button
                    className={classes.button}
                    onClick={() => removeItem(name)}
                >
                    <FaTimesCircle />
                </button>
            </div>
        </li>
    );
};

export default Item;
