import React from "react";
import classes from './Select.module.css'


function Select(props) {
    return (
        <div className={classes.select}>
            <select id={props.id} value={props.value} name={props.id} onChange={props.onChange} onFocus={props.onFocus} onBlur={props.onFocus} style={props.style}>
                {
                    props.options.map((option,index) => {
                        return(
                            <option key={index} value={option.value} selected={option.selected} disabled={option.disabled}>{option.value}</option>
                        )
                    })
                }
            </select>
        </div>

    )
}

export default Select;