import React from "react";

const classes = {
    wrapper:
        "absolute flex w-full h-screen items-center justify-center bg-white top-0 left-0",
};

const AddMeal = ({ setShowModal }) => {
    return (
        <div className={classes.wrapper} onClick={() => setShowModal(false)}>
            <p>This is the modal</p>
        </div>
    );
};

export default AddMeal;
