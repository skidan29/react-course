import classes from './MyButton.module.css'
export const MyButton = ({text, ...props}) => {

    return (
        <button {...props} className={classes.btn}>{text}</button>
    );
}
