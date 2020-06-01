import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import { getCart, getItemsCount } from '../../actions/cart';

class Layout extends Component {
    componentDidMount() {
        this.props.getCart();
    }

    render () {
        const { children, count } = this.props;

        return (
            <main className="main-wrapper">
                <section className="main-content">
                    <Header />
                    <Menu count={count} />
                    <div className="container">{children}</div>
                </section>
                <Footer />
            </main>    
        );
    }
}

const mapStateToProps = state => ({
    count: getItemsCount(state)
});

const mapDispatchToProps = {
    getCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Layout);