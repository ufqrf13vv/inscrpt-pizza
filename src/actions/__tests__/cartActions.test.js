import {
    ASC_ITEM_IN_CART,
    DESC_ITEM_IN_CART,
    REMOVE_ITEM_FROM_CART,
    GET_CART,
    CLEAR_CART,
    
    getCart,
    clearCart,
    removeItemFromCart,
    ascItemInCart,
    descItemInCart
} from '../cart';

describe('Cart actions:', () => {
    it('getCart()', () => {
        const expectedAction  = { 
            type: GET_CART,
            data: []
        };

        expect(getCart()).toEqual(expectedAction);
    });

    it('clearCart()', () => {
        const expectedAction = {
            type: CLEAR_CART,
            data: [],
        };
      
        expect(clearCart()).toEqual(expectedAction);
    });

    it('removeItemFromCart()', () => {
        const expectedAction = {
            type: REMOVE_ITEM_FROM_CART,
            id: '5e9310828329180a7f5f447d'
        };
        
        localStorage.setItem('cart', JSON.stringify( [{
            id: "5e9310828329180a7f5f447d",
            image: "https://i.ibb.co/F7pDGMd/chicken-bbq.jpg",
            title: "Chicken BBQ",
            price: 11.99,
            quantity: 1
        }] ));
        expect(removeItemFromCart('5e9310828329180a7f5f447d')).toEqual(expectedAction);
    });

    it('ascItemInCart()', () => {
        const expectedAction = {
            type: ASC_ITEM_IN_CART,
            data: [{
                id: "5e9310828329180a7f5f447d",
                image: "https://i.ibb.co/F7pDGMd/chicken-bbq.jpg",
                title: "Chicken BBQ",
                price: 11.99,
                quantity: 2
            }]
        };
        const item = {
            id: "5e9310828329180a7f5f447d",
            image: "https://i.ibb.co/F7pDGMd/chicken-bbq.jpg",
            title: "Chicken BBQ",
            price: 11.99,
            quantity: 2
        };
        
        expect(ascItemInCart(item)).toEqual(expectedAction);
    });

    it('descItemInCart()', () => {
        const expectedAction = {
            type: DESC_ITEM_IN_CART,
            data: [{
                id: "5e9310828329180a7f5f447d",
                image: "https://i.ibb.co/F7pDGMd/chicken-bbq.jpg",
                title: "Chicken BBQ",
                price: 11.99,
                quantity: 1
            }]
        };

        expect(descItemInCart('5e9310828329180a7f5f447d')).toEqual(expectedAction);
    });
});