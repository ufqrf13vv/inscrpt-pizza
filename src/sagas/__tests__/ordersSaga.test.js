import { takeEvery, put } from 'redux-saga/effects';
import { getOrdersSuccess, getOrdersFailure, GET_ORDERS_REQUEST } from '../../actions/orders';
import { ordersWatch, ordersFlow } from '../orders';
import { getOrders } from '../../helpers';

describe('Get orders history', () => {
    describe('Watch for all orders requests:', () => {
        it('Call method takeEvery for action getOrdersRequest', () => {
            const sagaWatcher = ordersWatch();
            expect(sagaWatcher.next().value).toEqual(takeEvery(GET_ORDERS_REQUEST, ordersFlow));
        });
    });

    describe('Positive scenario:', () => {
        const sagaFlow = ordersFlow();

        it('- Send a request for receive data', () => {
            expect(sagaFlow.next().value).toEqual(getOrders());
        });

        it('- Add data to the store', () => {
            const orders = {
                data: [{
                    name: 'Name',
                    surname: 'Surname',
                    phone: '+7-999-99-99',
                    address: 'Address',
                    total: 31.97
                }]
            };

            expect(sagaFlow.next(orders.data).value).toEqual(put(getOrdersSuccess(orders.data)));
        });
    });

    describe('Negative scenario:', () => {
        const sagaFlow = ordersFlow();

        it('- Send a request for receive data', () => {
            expect(sagaFlow.next().value).toEqual(getOrders());
        });

        it('- Add error to the store', () => {
            const error = new Error('test error');
            expect(sagaFlow.throw(error).value).toEqual(put(getOrdersFailure(error)));
        });
    });
});