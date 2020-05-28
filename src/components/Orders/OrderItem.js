import React from 'react';

const OrderItem = props => {
    const { index, order, orderComposition } = props;

    return (
        <div className="orders__item">
            <div className="orders__item-number">#{index+1}</div>
            <div className="orders__item-info">
                <span className="title">Client:</span>
                {order.name} {order.surname}
            </div>
            <div className="orders__item-info">
                <span className="title">Phone:</span>
                {order.phone}
            </div>
            <div className="orders__item-info">
                <span className="title">Address:</span>
                {order.address}
            </div>
            <div className="orders__item-wrapper">
            {orderComposition.map((item, index) => {
                return (
                    <div className="orders__item-block" key={index}>
                        <img className="orders__item-block_image" src={item.image} alt={item.title} />
                        <div className="orders__item-block_title">{item.title}</div>
                        <div className="orders__item-block_price">{item.price}$</div>
                        <div className="orders__item-block_quantity">{item.quantity}pc.</div>
                    </div>
                )
            })}
            </div>
            <div className="orders__item-total">Total: {order.total}$</div>
        </div>
    )
}

export default OrderItem;