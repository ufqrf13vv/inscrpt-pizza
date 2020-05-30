import reducer, { initialState } from '../currency';
import {
    GET_CURRENCY_REQUEST,
    GET_CURRENCY_SUCCESS,
    GET_CURRENCY_FAILURE
} from '../../actions/currency';

describe('Currency reducers:', () => {
    it('GET_CURRENCY_REQUEST', () => {
        const action = { 
            type: GET_CURRENCY_REQUEST
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState
        })
    });

    it('NEWS_GET_SUCCESS', () => {
        const action = {
            type: GET_CURRENCY_SUCCESS,
            data: {
                EUR: 2,
                USD: 1
            }
        }
      
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            data: action.data,
        })
    })

    it('GET_CURRENCY_FAILURE', () => {
        const initialState = {
            data: {},
            error: 'Error'
        }
        const action = {
            type: GET_CURRENCY_FAILURE,
            data: {},
            error: 'Error'
        }
      
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            data: action.data
        })
    })
});