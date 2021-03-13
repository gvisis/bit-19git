import React from 'react';
import '../css/header.css';
import logo from '../../images/githublogo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={logo} className='logo' alt='logo' />
            </Link>
            <span>BIT Group 19</span>
            <div className='search-box'>
                <input type='search' placeholder='Search... Not working' />
            </div>
        </header>
    );
}

export default Header;
