import React from 'react';
import logo from './../../logo.svg'

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="categories">
                    <div className="categories__entity">
                        <a href="/category/women">Women</a>
                    </div>
                    <div className="categories__entity">Men</div>
                </div>
                <div className="site-search">
                    <input type="text" className="site-search__input" />
                </div>
            </header>
        );
    }
}

export default Header;