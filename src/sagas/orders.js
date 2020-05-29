import { takeEvery, put } from 'redux-saga/effects';
import { getOrders } from '../helpers';

import { getOrdersSuccess, getOrdersFailure, GET_ORDERS_REQUEST } from '../actions/orders';

const ordersFlow = function* ordersFlow() {
    try {
        const orders = yield getOrders();

        yield put(getOrdersSuccess(orders));
    } catch (error) {
        yield put(getOrdersFailure(error));
    }
}

function* ordersWatch() {
    yield takeEvery(GET_ORDERS_REQUEST, ordersFlow)
}

export {
    ordersWatch,
    ordersFlow
}