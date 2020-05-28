import { takeEvery, put } from 'redux-saga/effects';

import { getJSON } from '../helpers';

import { getProductsSuccess, getProductsFailure, GET_PRODUCTS_REQUEST } from '../actions/products';

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(getJSON()), 500);
    })
}

const productsFlow = function* productsFlow() {
    try {
        const products = yield getProducts();

        yield put(getProductsSuccess(products));
    } catch (error) {
        yield put(getProductsFailure(error));
    }
}

export default function* productsWatch() {
    yield takeEvery(GET_PRODUCTS_REQUEST, productsFlow)
}