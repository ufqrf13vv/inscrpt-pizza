import {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE
} from '../actions/orders'

const initialState = {
    data: [],
    isLoading: false,
    error: ''
};
  
export default function orders(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case GET_ORDERS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: action.data,
            };
        case GET_ORDERS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}  