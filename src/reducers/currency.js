import {
    GET_CURRENCY_REQUEST,
    GET_CURRENCY_SUCCESS,
    GET_CURRENCY_FAILURE
} from '../actions/currency'

const initialState = {
    data: {},
    error: ''
};
  
export default function currency(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCY_REQUEST: 
            return {
                ...state
            };
        case GET_CURRENCY_SUCCESS: 
            return {
                ...state,
                data: action.data,
            };
        case GET_CURRENCY_FAILURE: 
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}  