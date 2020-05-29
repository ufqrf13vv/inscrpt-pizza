import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem';

import { getCart, removeItemFromCart, ascItemInCart, descItemInCart, clearCart } from '../../actions/cart';
import { getCurrencyRequest } from '../../actions/currency';

import { saveOrder, clearLocalCart } from '../../helpers';

import './style.css';

class Cart extends Component {
    state = {
        currency: 'usd',
        name: '',
        surname: '',
        phone: '',
        address: ''
    }

    componentDidMount() {
        this.props.getCart();
        this.props.getCurrencyRequest();
    }

    handleIncItem = id => {
        this.props.ascItemInCart({ id: id });
    }

    handleDescItem = (id, quantity) => {
        if (quantity > 1) this.props.descItemInCart(id);
    }

    handleRemove = id => {
        this.props.removeItemFromCart(id);
    }

    handleChangeCurrency = event => {
        this.setState({ currency: event.target.value });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        document.querySelector(`#${event.target.name}`).classList.remove('error');
    }

    handleOrder = () => {
        const { name, surname, phone, address } = this.state;

        if (name === '') {
            document.querySelector('#name').classList.add('error');
        }

        if (surname === '') {
            document.querySelector('#surname').classList.add('error');
        }

        if (phone === '') {
            document.querySelector('#phone').classList.add('error');
        }

        if (address === '') {
            document.querySelector('#address').classList.add('error');
        }

        if (name && surname && phone && address) {
            saveOrder({
                name: name, 
                surname: surname, 
                phone: phone, 
                address: address, 
                order: this.props.cart, 
                total: this.props.total 
            })
            this.props.clearCart();
            clearLocalCart();

            alert('Your order has been placed!');
        }
    }

    render() {
        const { cart, EUR } = this.props;
        const total = this.state.currency === 'eur' 
                    ? ((this.props.total * EUR) + (this.props.total * EUR) * 0.1).toFixed(2)
                    : (this.props.total + this.props.total * 0.1).toFixed(2);

        return (
            <div className="cart">
                <h1>Cart</h1>
                {!cart.length ? 
                    <div className="cart__empty">
                        <span>Your cart is currently empty.</span>
                        <span>Taste our super <a href="/pizza">pizza</a> before somebody did it before you!</span>
                    </div> 
                    : 
                    <div className="cart__container">
                        <div className="cart__form">
                            <div className="cart__form-block">
                                <label className="cart__form-label" htmlFor="name">First Name</label>
                                <input 
                                    className="cart__form-input" 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div className="cart__form-block">
                                <label className="cart__form-label" htmlFor="surname">Last Name</label>
                                <input 
                                    className="cart__form-input" 
                                    type="text" 
                                    id="surname"
                                    name="surname" 
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div className="cart__form-block">
                                <label className="cart__form-label" htmlFor="phone">Phone</label>
                                <input 
                                    className="cart__form-input" 
                                    type="text" 
                                    id="phone" 
                                    name="phone"
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div className="cart__form-block">
                                <label className="cart__form-label" htmlFor="address">Address</label>
                                <input 
                                    className="cart__form-input" 
                                    type="text" 
                                    id="address" 
                                    name="address"
                                    onChange={this.handleChange} 
                                />
                            </div>
                        </div>
                        <div className="cart__wrapper">
                            {cart.length &&
                                cart.map((item, index) => {
                                    const price = this.state.currency === 'eur' 
                                        ? (item.price * EUR).toFixed(2)
                                        : item.price;

                                    return (
                                        <CartItem 
                                            key={index} 
                                            item={item} 
                                            price={price} 
                                            handleDescItem={this.handleDescItem}
                                            handleIncItem={this.handleIncItem}
                                            handleRemove={this.handleRemove}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="cart__footer">
                            <div className="cart__footer-row">
                                <div className="cart__footer-block">
                                    <div className="cart__footer-title">Currency:</div>
                                    <select 
                                        className="cart__footer-select" 
                                        onChange={this.handleChangeCurrency} 
                                        value={this.state.currency}
                                    >
                                        <option value="usd">$</option>
                                        <option value="eur">€</option>
                                    </select>
                                </div>
                                <div className="cart__footer-block">
                                    <div className="cart__footer-title">Total: {total}</div>
                                    
                                </div>
                            </div>
                            <div className="cart__footer-delivery">10% added as a delivery cost</div>
                        </div>
                        <div className="cart__order">
                            <button className="cart__order-btn" onClick={this.handleOrder}>Order</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart.items,
    total: Number(state.cart.items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)),
    EUR: state.currency.data.EUR
})

const mapDispatchToProps = {
    getCart,
    removeItemFromCart,
    ascItemInCart,
    descItemInCart,
    clearCart,
    getCurrencyRequest,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);