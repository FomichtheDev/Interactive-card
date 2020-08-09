import React from "react";
import classes from './card.module.css'
import CardInput from "../CardInput/CardInput";
import {useDispatch, useSelector} from "react-redux";
import {
    setCardNumber,
    setCardHolder,
    setCardExpMonth,
    setCardExpYear,
    focusOnCardNumber,
    focusOnFullName, focusOnExpDate, setCardCVV
} from '../actions/index'

    const bgImg = Math.floor(Math.random() * (26 - 1)) + 1;


function Card() {
    const activeInput = useSelector(state => state.activeInputReducer);

    const dispatch = useDispatch();
    const {cardNumber, expMonth, expYear, fullName, cvv} = useSelector(state => state.cardData);

    const activeStyle ={
        border: '2px solid white',
        borderRadius: '5px'
    };


    const getCardType = () => {
        let number = this.cardNumber;
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
            <div className={classes.flipper} style={activeInput.cvv ? {transform: 'rotateY(180deg)'} : null}>
                <section className={classes.card}
                         style={{backgroundImage: `url(${require(`../images/${bgImg}.jpeg`)})`}}>
                    <form action="#" style={activeInput.cvv ? {display: 'none'} : null}>
                        <div className={classes.top}>
                            <div className={classes.chip}>
                                <img src={require("../images/chip.png")} alt="chip"/>
                            </div>
                            <div className={classes.cardType}>
                                <img src={require('../images/visa.png')} alt="cardType"/>
                                {/*{getCardType()}*/}
                            </div>
                        </div>
                        <div className={classes.middle}>
                            <CardInput type='text'
                                        id='cardNumberOnCard'
                                       style={activeInput.cardNumber ? activeStyle : null}
                                       onChange={e => dispatch(setCardNumber(e.target.value))}
                                       value={cardNumber}
                                       onFocus={() => dispatch(focusOnCardNumber())}/>
                        </div>
                        <div className={classes.bottom}>
                            <CardInput type='text'
                                       style={activeInput.fullName ? activeStyle : null}
                                       text={'Card Holder'}
                                       placeholder={'FULL NAME'}
                                       onChange={e => dispatch(setCardHolder(e.target.value))}
                                       value={fullName}
                                       id='fullNameOnCard'
                                       onFocus={() => dispatch(focusOnFullName())}/>


                            <CardInput type='text'
                                       style={activeInput.expDate ? activeStyle : null}
                                       text={'Expires'}
                                       placeholder={'MM/YY'}
                                       value={expYear || expMonth ? expMonth + "/" + expYear : ''}
                                       id='expDate'
                                       onFocus={() => dispatch(focusOnExpDate())}/>
                        </div>
                    </form>
                </section>
                <div className={classes.backside}>
                    <CardInput type='password'
                               className={classes.cvv}
                               text='CVV'
                               value={cvv}
                               id='cvvOnCard'/>
                </div>
            </div>
        </div>
    )
}

export default Card;