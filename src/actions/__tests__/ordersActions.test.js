import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    
    getProductsRequest,
    getProductsSuccess,
    getProductsFailure
} from '../products';

describe('Orders actions:', () => {
    it('getProductsRequest() - should create an action to set isLoading', () => {
        const expectedAction  = { 
            type: GET_PRODUCTS_REQUEST
        };

        expect(getProductsRequest()).toEqual(expectedAction);
    });

    it('getProductsSuccess() - should attach data', () => {
        const expectedAction = {
            type: GET_PRODUCTS_SUCCESS,
            data: [{ _id: 'id1' }],
            error: ''
        }
      
        expect(getProductsSuccess([{ _id: 'id1' }])).toEqual(expectedAction);
    });

    it('getProductsFailure()', () => {
        const expectedAction = {
            type: GET_PRODUCTS_FAILURE,
            error: 'Error'
        }
      
        expect(getProductsFailure('Error')).toEqual(expectedAction);
    });
});