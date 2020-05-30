import reducer, { initialState } from '../cart';
import {
    GET_CART,
    CLEAR_CART
} from '../../actions/cart';

describe('Cart reducers:', () => {
    it('Get cart data', () => {
        const action = { 
            type: GET_CART, 
            data: [{
                id: 'id',
                image:"https://i.ibb.co/F7pDGMd/chicken-bbq.jpg",
                title: "Chicken BBQ",
                price: 11.99,
                quantity: 1
            }] 
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            items: action.data
        });
    });

    it('Clear cart', () => {
        const action = {
            type: CLEAR_CART,
            data: []
        }
        
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            items: action.data,
        });
    });
});