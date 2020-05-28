const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

export function getOrdersRequest() {
    return {
        type: GET_ORDERS_REQUEST
    }
}

export function getOrdersSuccess(data) {
    return {
        type: GET_ORDERS_SUCCESS,
        data: data,
        error: ''
    }
}

export function getOrdersFailure(error) {
    return {
        type: GET_ORDERS_FAILURE,
        error: error
    }
}

export {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE
}