import {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE,
    
    getOrdersRequest,
    getOrdersSuccess,
    getOrdersFailure
} from '../orders';

describe('Products actions:', () => {
    it('getOrdersRequest() - should create an action to set isLoading', () => {
        const expectedAction  = { 
            type: GET_ORDERS_REQUEST
        };

        expect(getOrdersRequest()).toEqual(expectedAction);
    });

    it('getOrdersSuccess() - should attach data', () => {
        const expectedAction = {
            type: GET_ORDERS_SUCCESS,
            data: [{ _id: 'id1' }],
            error: ''
        }
      
        expect(getOrdersSuccess([{ _id: 'id1' }])).toEqual(expectedAction);
    });

    it('getOrdersFailure()', () => {
        const expectedAction = {
            type: GET_ORDERS_FAILURE,
            error: 'Error'
        }
      
        expect(getOrdersFailure('Error')).toEqual(expectedAction);
    });
});