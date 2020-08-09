import {combineReducers} from "redux";
import cardDataReducer from "./cardDataReducer";
import activeInputReducer from "./activeInputReducer";

const rootReducer = combineReducers({
    cardData: cardDataReducer,
    activeInputReducer

});

export default rootReducer;