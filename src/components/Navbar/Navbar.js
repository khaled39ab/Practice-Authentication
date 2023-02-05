import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut();
    }

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
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {
                            user?.uid ?
                                <li>
                                    <NavLink to={''}>{user.displayName.split(' ')[0]} <button onClick={handleSignOut}>Sign out</button></NavLink>
                                </li> :
                                <>
                                    <li>
                                        <NavLink to="/signIn">Sign In</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signUp">Sign Up</NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;