import React, { createContext } from 'react';

const AuthContext = createContext();

const UserContext = ({children}) => {
    const handleAuth = {};

    return (
        <AuthContext.Provider value={handleAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;