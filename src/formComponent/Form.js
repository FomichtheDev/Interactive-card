import React from "react";
import classes from './Form.module.css';
import active from '../CardInput/CardInput.module.css';
import select from '../Select/Select.module.css'
import flip from '../card/card.module.css';
import Input from "../formInput/Input";
import Select from "../Select/Select";
import years from "../Select/years";
import months from "../Select/months";
import Card from "../card/Card";
import {useDispatch, useSelector} from "react-redux";
import {SetCardData, SetCardErrors, setCardExpYear, setCardExpMonth} from "../actions";


function Form() {

    const dispatch = useDispatch();
    const {cardNumber, fullName, cvv, expYear, expMonth} = useSelector(state => state.cardData);
    const cardErrors = useSelector(state => state.cardData.errors);


    const onChange = (e) => {
        const { name, value } = e.target;
        const fullNameRegEx = new RegExp(/^[a-z,'-]+(\s)[a-z,'-]+$/i);
        let errors = cardErrors;
        switch (name) {
            case 'cardNumber':
                errors.cardNumber =
                    value.trim().replace(/\s/g, '').length === 16 && (/^\d+$/).test(value.trim().replace(/\s/g, ''))
                        ? ''
                        : 'Card Number is not valid!';
                break;
            case 'fullName':
                errors.fullName =
                    !fullNameRegEx.test(String(value))
                        ? 'Incorrect Full Name!'
                        : '';
                break;
            case 'cvv':
                errors.cvv =
                    value.length === 3 && (/^\d+$/).test(value.trim())
                        ? ''
                        : 'Invalid cvv!';
                break;
            default:
                break;
        }


        dispatch(SetCardData(name, value));
        dispatch(SetCardErrors(errors));

    };

    const onSubmit = async e => {
        e.preventDefault();
        if(validateForm(cardErrors) && expYear !== '' && expMonth !== '') {
            document.getElementById('expYear').classList.remove(select.active);
            document.getElementById('expMonth').classList.remove(select.active);
            document.getElementById('mainForm').classList.add(classes.success);
            const authData = {
                //Some data
            };

            try {
                // const response
                console.log('Success')
            }
            catch (e) {
                console.log(e)
            }
        }
        else{
            document.getElementById('expYear').className = (select.active);
            document.getElementById('expMonth').className = (select.active);
        }
    };


    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    const Focus = (e) => {
        if(e.target.name === 'expYear' || e.target.name === 'expMonth'){
            document.getElementById('expDateOnCard').classList.toggle(active.cardActive);
        }
        else if(e.target.name === 'cvv'){
            document.getElementById('flipper').classList.toggle(flip.flip);
            document.getElementById('card').style.display = (document.getElementById('card').style.display === 'none') ? 'block' : 'none';
        }
        else{
            document.getElementById(e.target.name + 'OnCard').classList.toggle(active.cardActive);
        }
    };


    return (
        <div className={classes.main}>
            <Card/>
            <form className={classes.data} onSubmit={onSubmit} id='mainForm'>
                <Input type='text'
                       maxLength='19'
                       minLength='19'
                       id='cardNumber'
                       text='Card Number'
                       value={cardNumber}
                       onChange={onChange}
                        onFocus={Focus}/>
                       <span className={classes.error}>{cardErrors.cardNumber.length > 0 ? cardErrors.cardNumber : null}</span>
                <Input
                    type='text'
                    id='fullName'
                    maxLength='24'
                    minLength='3'
                    text='Full Name'
                    value={fullName}
                    onChange={onChange}
                    onFocus={Focus}/>
                <span className={classes.error}>{cardErrors.fullName.length > 0 ? cardErrors.fullName : null}</span>


                <div className={classes.bottomRow}>
                    <div className={classes.formGroup}>
                        <label htmlFor='cardMonth'>Expiration Date</label>
                        <div className={classes.select}>

                            <Select id='expYear'
                                    options={years}
                                    onChange={e => dispatch(setCardExpYear(e.target.value.slice(2)))}
                                    onFocus={Focus}/>

                            <Select id='expMonth'
                                    options={months}
                                    onChange={e => dispatch(setCardExpMonth(e.target.value))}
                                    onFocus={Focus}/>

                        </div>
                    </div>
                    <Input class={classes.cvv}
                           id='cvv'
                           type='text'
                           maxLength='3'
                           text='CVV'
                           value={cvv}
                           onFocus={Focus}
                           onChange={onChange}/>
                </div>
                <span className={classes.lastError}>{cardErrors.cvv.length > 0 ? cardErrors.cvv : null}</span>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;