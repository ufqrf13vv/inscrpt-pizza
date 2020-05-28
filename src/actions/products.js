const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export function getProductsRequest() {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

export function getProductsSuccess(data) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        data: data,
        error: ''
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error: error
    }
}

export {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
}