import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProductsRequest } from '../../actions/products';
import { ascItemInCart } from '../../actions/cart';

import Item from './Item';
import Loader from '../Loader/Loader';

import './style.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.getProductsRequest();
    }

    handleAdd = (id, title, price, image) => {
        this.props.ascItemInCart({
            id: id,
            image: image,
            title: title,
            price: price,
            quantity: 1
        });
    }

    render() {
        const { products, isLoading } = this.props;

        return (
            <div className="products">
                <h1>Pizza</h1>
                {isLoading && <Loader />}
                <div className="products__wrapper">
                    { products.map((el, index) => <Item key={index} item={el} handleAdd={this.handleAdd} />) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.data,
    isLoading: state.products.isLoading,
})

const mapDispatchToProps = {
    getProductsRequest,
    ascItemInCart,
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(MainPage);