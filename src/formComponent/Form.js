import React from "react";
import classes from './Form.module.css'
import Input from "../formInput/Input";
import Select from "../Select/Select";
import years from "../Select/years";
import months from "../Select/months";
import Card from "../card/Card";
import {useDispatch, useSelector} from "react-redux";
import {
    setCardExpMonth,
    setCardExpYear,
    setCardHolder,
    setCardNumber,
    focusOnCardNumber,
    focusOnFullName,
    focusOnExpDate,
    focusOnCvv,
} from "../actions";


function Form() {

    const styles = {
        border: '1px solid #3d9cff',
        boxShadow: '0 1px 4px 1px rgba(61,156,255,0.4)'
    };

    const dispatch = useDispatch();
    const {cardNumber, fullName, cvv} = useSelector(state => state.cardData);
    const activeInput = useSelector(state => state.activeInputReducer);


    const cardNumberChanger = (e) => {
        dispatch(setCardNumber(e.target.value));
    };

    const fullNameChanger = (e) => {
        dispatch(setCardHolder(e.target.value))
    };

    const expYearChanger = e => {
        dispatch(setCardExpYear(e.target.value.slice(2)));
    };

    const expMonthChanger = e => {
        dispatch(setCardExpMonth(e.target.value))
    };

    return (
        <div className={classes.main}>
            <Card/>
            <form className={classes.data}>
                <Input type='text'
                       id='cardNumber'
                       text='Card Number'
                       value={cardNumber}
                       onChange={cardNumberChanger}
                       onFocus={() => dispatch(focusOnCardNumber())}
                       style={activeInput.cardNumber ? styles : null}/>
                <Input
                    type='text'
                    id='fullName'
                    text='Full Name'
                    value={fullName}
                    onChange={fullNameChanger}
                    style={activeInput.fullName ? styles : null}
                    onFocus={() => dispatch(focusOnFullName())}/>
                <div className={classes.bottomRow}>
                    <div className={classes.formGroup}>
                        <label htmlFor='cardMonth'>Expiration Date</label>
                        <div className={classes.select}>
                            <Select id='expYear'
                                    options={years}
                                    onChange={expYearChanger}
                                    style={activeInput.expDate ? styles : null}
                                    onFocus={() => dispatch(focusOnExpDate())}/>
                            <Select id='expMonth'
                                    options={months}
                                    onChange={expMonthChanger}
                                    style={activeInput.expDate ? styles : null}
                                    onFocus={() => dispatch(focusOnExpDate())}/>
                        </div>
                    </div>
                    <Input class={classes.cvv}
                           id='cvv'
                           text='CVV'
                           value={cvv}
                           onFocus={() => dispatch(focusOnCvv())}
                           style={activeInput.cvv ? styles : null}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;