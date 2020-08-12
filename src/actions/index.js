

export const setCardExpMonth = (payload) => {
    return{
        type: 'SET_CARD_EXP_MONTH',
        payload: payload
    }
};


export const setCardExpYear = (payload) => {
    return{
        type: 'SET_CARD_EXP_YEAR',
        payload: payload
    }
};




export const SetCardData = (name, value) => {
    return{
        type: 'SET_CARD_DATA',
        name,
        value
    }
};

export const SetCardErrors = (errors) => {
    return{
        type: 'SET_CARD_ERRORS',
        errors
    }
};
