import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div className="orders">
                <h1>Orders history</h1>
                {isLoading && <Loader />}
                {isEmpty ?
                <div className="orders__wrapper">
                {orders.map((order, index) => {
                    return (
                        <OrderItem key={index} order={order} index={index} orderComposition={order.order} />
                    )
                })}
                </div>
                :
                <div className="orders__empty">Empty table</div>
                }
            </div>
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