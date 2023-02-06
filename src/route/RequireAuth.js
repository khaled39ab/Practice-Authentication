import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/UserContext';

const RequireAuth = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to={'/signIn'} state={{ from: location }} replace />
    }

    return children;

};

export default RequireAuth;