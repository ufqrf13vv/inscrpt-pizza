import { takeEvery, put } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure, GET_PRODUCTS_REQUEST } from '../../actions/products';
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
            expect(sagaFlow.next().value).toEqual(getProducts());
        });

        it('- Add data to the store', () => {
            const products = {
                data: [{
                    _id: "5e9310828329180a7f5f447c",
                    title: "Buffalo Chicken",
                    ingredients: "Grilled chicken",
                    image: "https://i.ibb.co/wQHr7jq/buffalo-chicken.jpg",
                    price: 9.99
                }]
            }

            expect(sagaFlow.next({ data: products.data }).value).toEqual(put(getProductsSuccess(products)));
        });
    });

    describe('Negative scenario:', () => {
        const sagaFlow = productsFlow();

        it('- Send a request for receive data', () => {
            expect(sagaFlow.next().value).toEqual(getProducts());
        });

        it('- Add error to the store', () => {
            const error = new Error('test error');
            expect(sagaFlow.throw(error).value).toEqual(put(getProductsFailure(error)));
        });
    });
});