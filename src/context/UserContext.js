import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    // const [user, setUser] = useState(null); //if default value is null then user will load delay and route stuck with protected route
    const [user, setUser] = useState({});

    /* 
   ===============================================================================
   *************************           Provider          *************************
   ===============================================================================
   */
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    /* 
   ===============================================================================
   *************************        Sign In method       *************************
   ===============================================================================
   */
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

    /* 
    ===============================================================================
    *************************       Sign Up Method        *************************
    ===============================================================================
    */
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    /* 
    ===============================================================================
    *************************           Sign Out          *************************
    ===============================================================================
    */
    const logOut = () => {
        signOut(auth)
    }

    /* 
    ===============================================================================
    *************************      State Change Auth      *************************
    ===============================================================================
    */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => unsubscribe()

    }, [])


    /* 
    ===============================================================================
    *************************          Provider           *************************
    ===============================================================================
    */
    const handleAuthInfo = { user, facebookSignIn, googleSignIn, githubSignIn, passwordSignIn, logOut, signUp };


    return (
        <AuthContext.Provider value={handleAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;