import {
    GET_CURRENCY_REQUEST,
    GET_CURRENCY_SUCCESS,
    GET_CURRENCY_FAILURE,
    
    getCurrencyRequest,
    getCurrencySuccess,
    getCurrencyFailure
} from '../currency';

describe('Currency actions:', () => {
    it('getOrdersRequest() - should create an action to set isLoading', () => {
        const expectedAction  = { 
            type: GET_CURRENCY_REQUEST
        };

        expect(getCurrencyRequest()).toEqual(expectedAction);
    });

    it('getCurrencySuccess() - should attach data', () => {
        const expectedAction = {
            type: GET_CURRENCY_SUCCESS,
            data: { EUR: 0.9 },
            error: ''
        }
      
        expect(getCurrencySuccess({ EUR: 0.9 })).toEqual(expectedAction);
    });

    it('getCurrencyFailure()', () => {
        const expectedAction = {
            type: GET_CURRENCY_FAILURE,
            error: 'Error'
        }
      
        expect(getCurrencyFailure('Error')).toEqual(expectedAction);
    });
});