import React from "react";
import classes from "./MyModal.module.css";

export const MyModal = ({children, visible, setVisible}) => {

    const rootClass = [classes.myModal];

    if (visible) {
        rootClass.push(classes.myModal_active)
    }

    return (
        <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}