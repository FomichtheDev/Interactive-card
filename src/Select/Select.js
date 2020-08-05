import React from "react";
import classes from './Select.module.css'

function Select(props) {
    return (
        <div className={classes.select}>
            <select id={props.id} value={props.value} onChange={props.onChange}>
                    <option value="1" defaultValue>111111</option>
                    <option value="2">222222</option>
                    <option value="3">333333</option>
                    <option value="4">444444</option>
                    <option value="5">555555</option>
                {/*{*/}
                {/*    props.options.map((option, index) => {*/}
                {/*        return (*/}
                {/*            <option key={option.value + index} value={option.value}>{option.text}</option>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </select>
        </div>
    )
}

export default Select;