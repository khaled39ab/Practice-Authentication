import React, { createContext } from 'react';

const AuthContext = createContext();

const UserContext = () => {
    const handleAuth = {};

    return (
        <AuthContext value={handleAuth}>

        </AuthContext>
    );
};

export default UserContext;