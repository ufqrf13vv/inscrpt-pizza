import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import CartItem from './CartItem';

import { removeItemFromCart, ascItemInCart, descItemInCart, clearCart } from '../../actions/cart';
import { getCurrencyRequest } from '../../actions/currency';

import { saveOrderToDB } from '../../helpers';

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
        const regExp = /^[\s()+-]*?([0-9][\s()+-]*){6,20}$/;
        this.setState({ [event.target.name]: event.target.value });
        document.querySelector(`#${event.target.name}`).classList.remove('error');

        if (event.target.name === 'phone') {
            console.log(event.target.value.match(regExp))
        }
        
        // return !!val.match(regExp) || val.length !== 0;
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
            saveOrderToDB(name, surname, phone, address, this.props.cart, this.props.total);
            this.props.clearCart();
            localStorage.clear();
            alert('Your order has been placed!');
        }
    }

    render() {
        const { cart, EUR } = this.props;
        const total = this.state.currency === 'eur' ? (this.props.total * EUR).toFixed(2) : this.props.total;
        console.log(!!cart.length)
        return (
            <main className="main-wrapper">
                <section className="main-content">
                    <Header />
                    <Menu />
                    <div className="container">
                        <h1>Cart</h1>
                        {!cart.length ? 
                            <div className="cart__empty">
                                <span>Your cart is currently empty.</span>
                                <span>Taste our super <a href="/pizza">pizza</a> before somebody did it before you!</span>
                            </div> 
                            : 
                            <div className="cart">
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
                                <div className="cart__order">
                                    <button className="cart__order-btn" onClick={this.handleOrder}>Order</button>
                                </div>
                            </div>
                        }
                    </div>
                </section>
                <Footer />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart.items,
    total: state.cart.items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2),
    EUR: state.currency.data.EUR
})

const mapDispatchToProps = {
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

// static phone(val) {
//     const regExp = /^[\s()+-]*?([0-9][\s()+-]*){6,20}$/;
//     return !!val.match(regExp) || val.length !== 0;
// }