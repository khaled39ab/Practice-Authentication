import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{color: 'red', textAlign: 'center'}}>
            <h1>404!! <br /> Page Not Found</h1>
            <Link style={{color: 'white'}} to={'/'}><h2>Go to Home</h2></Link>
        </div>
    );
};

export default NotFound;