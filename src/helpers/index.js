import data from './data.json';

const saveOrder = order => {
    const orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

const getOrders = () => localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

const clearLocalCart = () => {
    localStorage.setItem('cart', []);
}

const getJSON = () => data;

export { 
    getJSON,
    saveOrder,
    getOrders,
    clearLocalCart,
}