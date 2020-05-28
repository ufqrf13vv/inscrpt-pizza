import {
    ASC_ITEM_IN_CART,
    DESC_ITEM_IN_CART,
    REMOVE_ITEM_FROM_CART,
    GET_CART,
    CLEAR_CART
} from '../actions/cart'

const initialState = {
    items: []
};
  
export default function cart(state = initialState, action) {
    switch (action.type) {
        case ASC_ITEM_IN_CART: 
            return {
                ...state,
                items: action.data
            };
        case DESC_ITEM_IN_CART:
            return {
                ...state,
                items: action.data
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            };
        case GET_CART:
            return {
                ...state,
                items: state.items.concat(action.data)
            }
        case CLEAR_CART:
            return {
                ...state,
                items: action.data
            }
        default:
            return state;
    }
}  