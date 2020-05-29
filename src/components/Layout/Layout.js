import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class Layout extends Component {
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

export default connect(
    state => ({
        count: state.cart.items.length 
            ? state.cart.items.reduce((acc, cur) => acc + cur.quantity, 0) 
            : 0
    })
)(Layout);