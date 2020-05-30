import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from '../actions/products'

export const initialState = {
    isLoading: false,
    data: [],
    error: ''
};
  
export default function products(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case GET_PRODUCTS_SUCCESS: 
            return {
                ...state,
                data: action.data,
                isLoading: false
            };
        case GET_PRODUCTS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}  