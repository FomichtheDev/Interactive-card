export const setCardNumber = (payload) => {
  return{
      type: 'SET_CARD_NUMBER',
      payload: payload
  }
};


export const setCardHolder = (payload) => {
    return{
        type: 'SET_CARD_HOLDER',
        payload: payload
    }
};


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

export const setCardCVV = (payload) => {
    return{
        type: 'SET_CARD_CVV',
        payload: payload
    }
};




export const focusOnCardNumber = () => {
  return{
      type: 'FOCUS_ON_CARD_NUMBER'
  }
};

export const focusOnFullName = () => {
    return{
        type: 'FOCUS_ON_FULL_NAME'
    }
};

export const focusOnExpDate = () => {
    return{
        type: 'FOCUS_ON_EXP_DATE'
    }
};

export const focusOnCvv = () => {
    return{
        type: 'FOCUS_ON_CVV'
    }
};

