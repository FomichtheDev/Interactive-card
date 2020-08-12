import React from "react";
import classes from './CardInput.module.css'



function CardInput(props) {


    return (
        <div className={classes.cardInput}>
            {props.text ? <label>{props.text}</label> : null}
            <input
                style={props.style}
                type={props.type}
                onChange={props.onChange}
                name={props.id}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxLength}
                id={props.id}
                onFocus={props.onFocus}
                onBlur={props.onFocus}
                disabled={props.disabled}/>
        </div>

    )
}

export default CardInput;