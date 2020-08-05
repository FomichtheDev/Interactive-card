import React from "react";
import classes from './Form.module.css'
import Input from "../formInput/Input";
import Select from "../Select/Select";


function Form() {
    return(
        <div className={classes.main}>
            <form>
                <Input id='cardNumber' text='Card Number'/>
                <Input id='fullNumber' text='Full Name'/>
                <div className={classes.bottomRow}>
                    <div className={classes.formGroup}>
                        <label className={classes.selectLabel} htmlFor='cardMonth'>Expiration Date</label>
                        <div style={{display: 'block'}}>
                            <Select id='cardMonth'/>
                            <Select id='cardYear'/>
                        </div>
                    </div>
                    <Input/>
                </div>
            </form>
        </div>
    )
}

export default Form;