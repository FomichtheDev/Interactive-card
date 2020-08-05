import React from "react";
import classes from './Input.module.css'

function Input(props) {
    return(
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.text}</label>
            <input type="text" onChange={props.onChange}  id={props.id} name={props.id} />
        </div>

    )
}

export default Input;