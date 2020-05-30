import React from 'react';

const Item = props => {
    const { item, handleAdd } = props;

    return (
        <div className="products__item">
            <img className="products__item-image" src={item.image} alt="" />
            <div className="products__item-wrapper">
                <div className="products__item-title">{item.title}</div>
                <div className="products__item-description">{item.ingredients}</div>
                <div className="products__item-footer">
                    <div className="products__item-price">Price: ${item.price}</div>
                    <button 
                        className="products__item-add" 
                        onClick={() => handleAdd(item._id, item.title, item.price, item.image)}>
                            Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item;