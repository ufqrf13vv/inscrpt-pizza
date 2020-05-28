import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCart } from '../../actions/cart';

import './style.css';
import cart from '../../assets/img/cart.svg';

class Menu extends Component {
    componentDidMount() {
        this.props.getCart();
    }

    render() {
        const { count } = this.props;

        return (
            <nav className="menu">
                <div className="container">
                    <div className="menu__wrapper">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a className="menu__link" href="/pizza">Pizza</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/history">Orders history</a>
                            </li>
                        </ul>
                        <a className="cart-icon" href="/cart">
                            <img src={cart} alt="" />
                            {!!count && 
                            <span className="cart-count">{count}</span>
                            }
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    count: state.cart.items.length
})

const mapDispatchToProps = { getCart }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);