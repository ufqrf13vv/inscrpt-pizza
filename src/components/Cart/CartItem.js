import React from 'react';

const CartItem = props => {
    const { item, price } = props;

    return (
        <div className="cart__item">
            <img className="cart__item-image" src={item.image} alt={item.title} />
            <div className="cart__item-title">{item.title}</div>
            <div className="cart__item-block">
                <button className="cart__item-btn" onClick={() => props.handleDescItem(item.id, item.quantity)}>-</button>
                <span className="cart__item-quantity">{item.quantity}</span>
                <button className="cart__item-btn" onClick={() => props.handleIncItem(item.id)}>+</button>
            </div>
            <div className="cart__item-price">{price}</div>
            <button className="cart__item-remove" onClick={() => props.handleRemove(item.id)} />
        </div>
    )
}

export default CartItem;