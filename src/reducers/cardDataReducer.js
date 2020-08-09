const initialState = {
    cardNumber: '',
    fullName: '',
    expMonth: '',
    expYear: '',
    cvv: ''
};

const cardDataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case 'SET_CARD_NUMBER':
            return {
                ...state,
                cardNumber: action.payload
            };
        case 'SET_CARD_HOLDER':
            return {
                ...state,
                fullName: action.payload
            };
        case 'SET_CARD_EXP_MONTH':
            return {
                ...state,
                expMonth: action.payload
            };
        case 'SET_CARD_EXP_YEAR':
            return {
                ...state,
                expYear: action.payload
            };
        case 'SET_CARD_CVV':
            return {
                ...state,
                cvv: action.payload
            };
    }
};

export default cardDataReducer;