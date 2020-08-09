import React from "react";
import classes from './Input.module.css'

function Input(props) {

    return(
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.text}</label>
            <input
                className={props.class}
                style={props.style}
                type={props.type}
                onChange={props.onChange}
                id={props.id}
                name={props.id}
                onFocus={props.onFocus}
                onBlur={props.onFocus}
                minLength={props.length}
                maxLength={props.length}
                value={props.value}/>
        </div>

    )
}

export default Input;