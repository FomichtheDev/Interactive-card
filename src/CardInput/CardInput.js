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
                id={props.id}
                onFocus={props.onFocus}
                onBlur={props.onFocus}
                disabled={props.disabled}/>
            {/*<InputMask mask={props.mask} onChange={props.onChange} value={props.value} type={props.type} />*/}
            {/*<MaskedInput mask={props.mask}/>*/}
        </div>

    )
}

export default CardInput;