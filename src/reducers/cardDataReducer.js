const initialState = {
    cardNumber: '',
    fullName: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    errors: {
        cardNumber: '',
        fullName: '',
        expMonth: '',
        expYear: '',
        cvv: '',
    }
};

const cardDataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
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


        case 'SET_CARD_DATA':
            if (action.name.toString() === 'cardNumber') {
                if (action.value.length === 4 || action.value.length === 9 || action.value.length === 14) {
                    action.value += ' ';
                    return {
                        ...state,
                        [action.name]: action.value
                    };
                }
            }
            return {
                ...state,
                [action.name]: action.value
            };


        case 'SET_CARD_ERRORS':
            return {
                ...state,
                errors: action.errors
            };

    }
};

export default cardDataReducer;