const GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST';
const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
const GET_CURRENCY_FAILURE = 'GET_CURRENCY_FAILURE';

export function getCurrencyRequest() {
    return {
        type: GET_CURRENCY_REQUEST
    }
}

export function getCurrencySuccess(data) {
    return {
        type: GET_CURRENCY_SUCCESS,
        data: data,
        error: ''
    }
}

export function getCurrencyFailure(error) {
    return {
        type: GET_CURRENCY_FAILURE,
        error: error
    }
}

export {
    GET_CURRENCY_REQUEST,
    GET_CURRENCY_SUCCESS,
    GET_CURRENCY_FAILURE
}