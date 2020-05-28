import { takeEvery, put } from 'redux-saga/effects';
import { getOrdersFromDB } from '../helpers';

import { getOrdersSuccess, getOrdersFailure, GET_ORDERS_REQUEST } from '../actions/orders';

const ordersFlow = function* ordersFlow() {
    try {
        const orders = yield getOrdersFromDB();

        yield put(getOrdersSuccess(orders));
    } catch (error) {
        yield put(getOrdersFailure(error));
    }
}

export default function* ordersWatch() {
    yield takeEvery(GET_ORDERS_REQUEST, ordersFlow)
}