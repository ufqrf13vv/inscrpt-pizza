const ASC_ITEM_IN_CART = 'ASC_ITEM_IN_CART';
const DESC_ITEM_IN_CART = 'DESC_ITEM_IN_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const GET_CART = 'GET_CART';
const CLEAR_CART = 'CLEAR_CART';

export function ascItemInCart(item) {
    const savedCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    if (savedCart.length) {
        const index = savedCart.findIndex(cartItem => cartItem.id === item.id);
    
        if (index !== -1) {
            savedCart[index].quantity++;
        } else {
            savedCart.push(item);
        }       
    } else {
        savedCart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(savedCart));
    
    return {
        type: ASC_ITEM_IN_CART,
        data: savedCart
    }
}

export function descItemInCart(id) {
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    cartItems.find(item => item.id === id).quantity--;
    localStorage.setItem('cart', JSON.stringify(cartItems));

    return {
        type: DESC_ITEM_IN_CART,
        data: cartItems
    }
}

export function removeItemFromCart(id) {
    const cartItems = JSON.parse(localStorage.getItem('cart')).filter(item => item.id !== id);

    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    return {
        type: REMOVE_ITEM_FROM_CART,
        id: id,
    }
}

export function getCart() {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    return {
        type: GET_CART,
        data: cart,
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART,
        data: [],
    }
}

export {
    ASC_ITEM_IN_CART,
    DESC_ITEM_IN_CART,
    REMOVE_ITEM_FROM_CART,
    GET_CART,
    CLEAR_CART,
}