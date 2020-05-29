import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { getCurrencySuccess, getCurrencyFailure, GET_CURRENCY_REQUEST } from '../actions/currency';

const getCurrency = function() {
    return axios.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,USD')
        .then(response => response.data)
        .catch(error => error)
}

function* currencyFlow() {
    try {
        const data = yield call(getCurrency);

        yield put(getCurrencySuccess(data.rates));
    } catch (error) {
        yield put(getCurrencyFailure(error));
    }
}

function* currencyWatch() {
    yield takeEvery(GET_CURRENCY_REQUEST, currencyFlow)
}

export {
    currencyWatch,
    currencyFlow,
    getCurrency
}