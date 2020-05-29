import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import cart from '../../assets/img/cart.svg';

const Menu = props => {
    const { count } = props;
    
    return (
        <nav className="menu">
            <div className="container">
                <div className="menu__wrapper">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link className="menu__link" to="/pizza">Pizza</Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="/history">Orders history</Link>
                        </li>
                    </ul>
                    <Link className="cart-icon" to="/cart">
                        <img src={cart} alt="" />
                        {!!count && 
                        <span className="cart-count">{count}</span>
                        }
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu