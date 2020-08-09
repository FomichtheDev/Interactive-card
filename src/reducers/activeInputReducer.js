const initialState = {
  cardNumber: false,
  fullName: false,
  expDate: false,
  cvv: false,
};

const activeInputReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case 'FOCUS_ON_CARD_NUMBER':
            return {
                ...state,
                cardNumber: !state.cardNumber
            };
        case 'FOCUS_ON_FULL_NAME':
            return {
                ...state,
                fullName: !state.fullName
            };
        case 'FOCUS_ON_EXP_DATE':
            return {
                ...state,
                expDate: !state.expDate
            };
        case 'FOCUS_ON_CVV':
            return {
                ...state,
                cvv: !state.cvv
            };
    }
};

export default activeInputReducer;