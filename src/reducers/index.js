import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import currency from './currency';
import orders from './orders';

export default combineReducers({
    products,
    cart,
    currency,
    orders,
});
