import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Navbar.css'

const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    LOGO
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signIn">Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signUp">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {user?.displayName && <span>Hello {user.displayName}</span>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;