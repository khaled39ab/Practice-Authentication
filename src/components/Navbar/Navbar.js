import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    LOGO
                </div>
                <div className="nav-elements">
                    {/* <NavLink to="/">Home</NavLink> */}
                    {/* <NavLink to="/blog">Blog</NavLink> */}
                    {/* <NavLink to="/projects">Projects</NavLink> */}
                    {/* <NavLink to="/about">About</NavLink> */}
                    {/* <NavLink to="/contact">Contact</NavLink> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;