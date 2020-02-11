import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../../assets/optus-logo.png';

import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'><img src={logo} alt="optuslogo" className="logo" /></Link>
            <div className="link-container">
                <Link to='/mobile'  className="link" > mobile </Link>
                <Link to='/login' className="link" > login </Link>
            </div>
        </div>
    );
}

export default Header;
