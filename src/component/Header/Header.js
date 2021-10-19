import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="" alt="" />
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </div>
    );
};

export default Header;