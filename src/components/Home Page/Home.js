import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>
            <h1>Authentication Practice</h1>
            <p>This is Practice Project.</p>
            <div>
                <h2>User: {user?.displayName}</h2>
                <h3>Email: </h3>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Home;