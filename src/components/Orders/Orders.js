import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import OrderItem from '../Orders/OrderItem';
import Loader from '../Loader/Loader';

import { getOrdersRequest } from '../../actions/orders';

import './style.css';

class Orders extends Component {

    componentDidMount() {
        this.props.getOrdersRequest();
    }

    render() {
        const { isLoading, orders } = this.props;
        const isEmpty = !!orders.length;

        return (
            <main className="main-wrapper">
                <section className="main-content">
                    <Header />
                    <Menu />
                    <div className="orders">
                        <div className="container">
                            <h1>Orders history</h1>
                            {isLoading && <Loader />}
                            {isEmpty ?
                            <div className="orders__wrapper">
                            {orders.map((order, index) => {
                                const orderComposition = JSON.parse(order.ordercomp);

                                return (
                                    <OrderItem key={index} order={order} index={index} orderComposition={orderComposition} />
                                )
                            })}
                            </div>
                            :
                            <div className="orders__empty">Empty table</div>
                            }
                        </div> 
                    </div>
                </section>
                <Footer />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders.data,
    isLoading: state.orders.isLoading
});

const mapDispatchToProps = {
    getOrdersRequest
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(Orders);