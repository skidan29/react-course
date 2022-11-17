import classes from "./MyInput.module.css";

export const MyInput = (props) => {
    return (
        <input className={classes.input} type="text"  {...props} />
    )
}
