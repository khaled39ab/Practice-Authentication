import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const handleAuthInfo = { user, facebookSignIn, googleSignIn, githubSignIn };

    return (
        <AuthContext.Provider value={handleAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;