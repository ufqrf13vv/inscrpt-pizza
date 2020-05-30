import React from 'react';

const CartItem = props => {
    const { 
        item, 
        price, 
        handleIncItem,
        handleDescItem,
        handleRemove
    } = props;

    return (
        <div className="cart__item">
            <img className="cart__item-image" src={item.image} alt={item.title} />
            <div className="cart__item-title">{item.title}</div>
            <div className="cart__item-block">
                <button className="cart__item-btn" onClick={() => handleDescItem(item.id, item.quantity)}>-</button>
                <span className="cart__item-quantity">{item.quantity}</span>
                <button className="cart__item-btn" onClick={() => handleIncItem(item.id)}>+</button>
            </div>
            <div className="cart__item-price">{price}</div>
            <button className="cart__item-remove" onClick={() => handleRemove(item.id)} />
        </div>
    )
}

export default CartItem;