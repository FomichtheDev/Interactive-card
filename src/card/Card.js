import React from "react";
import classes from './card.module.css'
import CardInput from "../CardInput/CardInput";
import {useDispatch, useSelector} from "react-redux";
import {SetCardData, SetCardErrors} from '../actions/index'
import active from "../Select/Select.module.css";
import activeInputStyle from "../formInput/Input.module.css";

const bgImg = Math.floor(Math.random() * (26 - 1)) + 1;


function Card() {

    const dispatch = useDispatch();


    const activeInput = useSelector(state => state.activeInputReducer);

    const {cardNumber, expMonth, expYear, fullName, cvv} = useSelector(state => state.cardData);
    const cardErrors = useSelector(state => state.cardData.errors);

    const activeStyle = {
        border: '2px solid white',
        borderRadius: '5px',
        backgroundColor: 'rgba(0,0,0,0.4)',
    };


    const onChange = (e) => {
        const {value} = e.target;
        const name = e.target.name.slice(0, e.target.name.length - 6);
        const fullNameRegEx = new RegExp(/^[a-z,'-]+(\s)[a-z,'-]+$/i);
        let errors = cardErrors;
        switch (name) {
            case 'cardNumber':
                errors.cardNumber =
                    value.trim().replace(/\s/g, '').length === 16
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
                    value.trim().replace(/\s/g, '') === 3
                        ? ''
                        : 'Invalid cvv!';
                break;
            case 'expYear':
                errors.expYear =
                    !value
                        ? 'Invalid expiration year!'
                        : '';
                break;
            case 'expMonth':
                errors.expMonth =
                    !value
                        ? 'Invalid expiration year!'
                        : '';
                break;
            default:
                break;
        }


        dispatch(SetCardData(name, value));
        dispatch(SetCardErrors(errors));

    };

    const Focus = (e) => {
        if(e.target.name === 'expDateOnCard'){
            document.getElementById('expMonth').classList.toggle(active.active);
            document.getElementById('expYear').classList.toggle(active.active);
        }
        else if(e.target.name === 'fullNameOnCard'){
            document.getElementById('fullName').classList.toggle(activeInputStyle.active);
        }
        else{
            document.getElementById('cardNumber').classList.toggle(activeInputStyle.active);

        }
    };


    const getCardType = () => {
        let number = cardNumber;
        let re = new RegExp("^4");
        if (number.match(re) != null) return "visa";

        re = new RegExp("^(34|37)");
        if (number.match(re) != null) return "amex";

        re = new RegExp("^5[1-5]");
        if (number.match(re) != null) return "mastercard";

        re = new RegExp("^6011");
        if (number.match(re) != null) return "discover";

        re = new RegExp('^9792');
        if (number.match(re) != null) return 'troy';

        return "visa"; // default type
    };




    return (
        <div className={classes.flipContainer} id='forFlip'>
            <div id='flipper' className={classes.flipper}>
                <section className={classes.cardBackg}
                         style={{backgroundImage: `url(${require(`../images/${bgImg}.jpeg`)})`}}>
                    <form action="#">
                        <section id='card' className={classes.card}>
                            <div className={classes.top}>
                                <div className={classes.chip}>
                                    <img src={require("../images/chip.png")} alt="chip"/>
                                </div>
                                <div className={classes.cardType}>
                                    <img src={require(`../images/${getCardType()}.png`)} alt="cardType"/>
                                </div>
                            </div>
                            <div className={classes.middle}>
                                <CardInput type='text'
                                           id='cardNumberOnCard'
                                           maxLength={'19'}
                                           style={activeInput.cardNumber ? activeStyle : null}
                                           placeholder='1111  1111  1111  1111'
                                           onChange={onChange}
                                           value={cardNumber}
                                           onFocus={Focus}/>
                            </div>
                            <div className={classes.bottom}>
                                <CardInput type='text'
                                           style={activeInput.fullName ? activeStyle : null}
                                           text={'Card Holder'}
                                           placeholder={'FULL NAME'}
                                           onChange={onChange}
                                           value={fullName}
                                           id='fullNameOnCard'
                                           onFocus={Focus}/>


                                <CardInput type='text'
                                           style={activeInput.expDate ? activeStyle : null}
                                           text={'Expires'}
                                           placeholder={'MM/YY'}
                                           value={expYear || expMonth ? expMonth + "/" + expYear : ''}
                                           id='expDateOnCard'
                                           onFocus={Focus}/>
                            </div>
                        </section>

                        <div className={classes.backside}>
                            <CardInput type='password'
                                       className={classes.cvv}
                                       text='CVV'
                                       maxLength='3'
                                       value={cvv}
                                       id='cvvOnCard'/>
                                       <div className={classes.backLogo}>
                                           <div><img src={require(`../images/${getCardType()}.png`)} alt="cardType"/></div>
                                       </div>
                        </div>

                    </form>
                </section>
            </div>
        </div>
    )
}

export default Card;