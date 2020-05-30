import reducer, { initialState } from '../orders';
import {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE
} from '../../actions/orders';

describe('Orders reducers:', () => {
    it('GET_ORDERS_REQUEST', () => {
        const action = { 
            type: GET_ORDERS_REQUEST
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    });

    it('GET_ORDERS_SUCCESS', () => {
        const action = {
            type: GET_ORDERS_SUCCESS,
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

    it('GET_ORDERS_FAILURE', () => {
        const initialState = {
            data: {},
            error: 'Error'
        }
        const action = {
            type: GET_ORDERS_FAILURE,
            data: {},
            error: 'Error'
        }
      
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            data: action.data,
            isLoading: false
        })
    })
});