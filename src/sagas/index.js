import { fork } from 'redux-saga/effects';

import productsWatch from './products';
import currencyWatch from './currency';
import ordersWatch from './orders';

export default function*() {
    yield fork(productsWatch);
    yield fork(currencyWatch);
    yield fork(ordersWatch);
}