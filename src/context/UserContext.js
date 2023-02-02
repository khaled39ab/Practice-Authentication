import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const user = { displayName: 'Emran' }
    const handleAuth = {user};

    return (
        <AuthContext.Provider value={handleAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;