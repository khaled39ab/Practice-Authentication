import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});

    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();


    const facebookSignIn = () =>{
        return signInWithPopup(auth, facebookProvider);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    
    const handleAuthInfo = {user, facebookSignIn, googleSignIn};

    return (
        <AuthContext.Provider value={handleAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;