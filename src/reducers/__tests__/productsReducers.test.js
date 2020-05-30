import reducer, { initialState } from '../products';
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from '../../actions/products';

describe('Products reducers:', () => {
    it('GET_PRODUCTS_REQUEST', () => {
        const action = { 
            type: GET_PRODUCTS_REQUEST
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    });

    it('GET_PRODUCTS_SUCCESS', () => {
        const action = {
            type: GET_PRODUCTS_SUCCESS,
            data: [{
                _id: 'id1',
                title: 'Buffalo Chicken',
                ingredients: 'Grilled chicken, buffalo sauce, mozzarella, cheddar, red onions',
                image: 'https://i.ibb.co/wQHr7jq/buffalo-chicken.jpg',
                price: 9.99
            }],
            isLoading: true,
        }
      
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            data: action.data,
            isLoading: false
        })
    })

    it('GET_PRODUCTS_FAILURE', () => {
        const initialState = {
            data: [],
            error: 'Error'
        }
        const action = {
            type: GET_PRODUCTS_FAILURE,
            data: [],
            error: 'Error'
        }
      
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            data: action.data,
            isLoading: false
        })
    })
});