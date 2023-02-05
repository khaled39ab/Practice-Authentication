import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
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

    const passwordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })

        return () => unsubscribe()
        
    }, [])

    const handleAuthInfo = { user, facebookSignIn, googleSignIn, githubSignIn, passwordSignIn, logOut };

    return (
        <AuthContext.Provider value={handleAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;