import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact="true" activeClassName="active" className="item" to="/">Home</NavLink>
            <NavLink activeClassName="active" className="item" to="/about/velopert">About</NavLink>
            <NavLink activeClassName="active" className="item" to="/posts">Posts</NavLink>
            <NavLink activeClassName="active" className="item" to="/login">Login</NavLink>
            <NavLink activeClassName="active" className="item" to="/mypage">MyPage</NavLink>
            <NavLink activeClassName="active" className="item" to="/search">Search</NavLink>
        </div>
    );
};

export default Header;