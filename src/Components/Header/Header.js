/* eslint-disable no-undef */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className='header'>

            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/abo'>About from header</NavLink>
            <NavLink to='/contract'>Contract from header</NavLink>

            <NavLink to='/friend'>Friend </NavLink>
            <NavLink to='/gorus'>Gorus</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/allPosts'>Post</NavLink>
        </div>
    );
};

export default Header;