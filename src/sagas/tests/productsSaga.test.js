import { takeEvery, call, put } from 'redux-saga/effects';
import {
    getProductsSuccess, 
    getProductsFailure, 
    GET_PRODUCTS_REQUEST
} from '../../actions/products';
import { productsWatch, productsFlow, getProducts } from '../products';

describe('Get products', () => {
    describe('Watch for all getProductsRequest:', () => {
        it('Call method takeEvery for action getProductsRequest', () => {
            const sagaWatcher = productsWatch();
            expect(sagaWatcher.next().value).toEqual(takeEvery(GET_PRODUCTS_REQUEST, productsFlow));
        });
    });

    describe('Positive scenario:', () => {
        const sagaFlow = productsFlow();

        it('- Send a request for receive data', () => {
            expect(sagaFlow.next().value).toEqual(call(getProducts));
        });

        it('- Add data to the store', () => {
            const currency = {
                data: {
                    EUR: 2,
                    USD: 1
                }
            };

            expect(sagaFlow.next({ data: currency.data }).value).toEqual(put(getProductsSuccess(currency.data.result)));
        });
    });

    // describe('Negative scenario:', () => {
    //     const sagaFlow = currencyFlow();

    //     it('- Send a request for receive data', () => {
    //         expect(sagaFlow.next().value).toEqual(call(getCurrency));
    //     });

    //     it('- Add error to the store', () => {
    //         const error = new Error('test error');
    //         expect(sagaFlow.throw(error).value).toEqual(put(getCurrencyFailure(error)));
    //     });
    // });
});