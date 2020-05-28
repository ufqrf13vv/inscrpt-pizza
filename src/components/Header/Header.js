import React from 'react';

import logo from '../../assets/img/logo.png';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="/">
                        <img src={logo} alt="pizza" />
                    </a>
                    <div className="header__phone">8-800-000-00-00</div>
                </div>
            </div>
        </header>
    )
}

export default Header;