import { takeEvery, call, put } from 'redux-saga/effects';
import { getCurrencySuccess, getCurrencyFailure, GET_CURRENCY_REQUEST } from '../../actions/currency';
import { currencyWatch, currencyFlow, getCurrency } from '../currency';

describe('Get currency data', () => {
    describe('Watch for all getCurrencyRequest:', () => {
        it('Call method takeEvery for action getCurrencyRequest', () => {
            const sagaWatcher = currencyWatch();
            expect(sagaWatcher.next().value).toEqual(takeEvery(GET_CURRENCY_REQUEST, currencyFlow));
        });
    });

    describe('Positive scenario:', () => {
        const sagaFlow = currencyFlow();

        it('- Send a request for receive data', () => {
            expect(sagaFlow.next().value).toEqual(call(getCurrency));
        });

        it('- Add data to the store', () => {
            const currency = {
                data: {
                    EUR: 2,
                    USD: 1
                }
            };

            expect(sagaFlow.next({ data: currency.data }).value).toEqual(put(getCurrencySuccess(currency.data.result)));
        });
    });

    describe('Negative scenario:', () => {
        const sagaFlow = currencyFlow();

        it('- Send a request for receive data', () => {
            expect(sagaFlow.next().value).toEqual(call(getCurrency));
        });

        it('- Add error to the store', () => {
            const error = new Error('test error');
            expect(sagaFlow.throw(error).value).toEqual(put(getCurrencyFailure(error)));
        });
    });
});