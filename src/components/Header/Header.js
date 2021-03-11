import React from 'react';
import './header.css';
import logo from '../../images/githublogo.png';

function Header() {
    return (
        <header>
            <img src={logo} className='logo' alt='logo' />
            <span>BIT Group 19</span>
            <div className='search-box'>
                <input type='search' placeholder='Search...' />
            </div>
        </header>
    );
}

export default Header;
