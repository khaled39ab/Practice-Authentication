import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import app from '../../firebase/firebase.init';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './SignIn.css'
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();

    /* 
    ===============================================================================
    *************************         Google Auth         *************************
    ===============================================================================
    */
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    /* 
    ===============================================================================
    *************************        Facebook Auth        *************************
    ===============================================================================
    */
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, FacebookProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err.message);
            })

    }

    /* 
    ===============================================================================
    *************************         Github Auth         *************************
    ===============================================================================
    */
    const handleGithubSignIn = () => {
        signInWithPopup(auth, GithubProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    return (
        <div className="signIn-container">
            <div className="signIn-screen">
                <div className="signIn-screen__content">
                    <form className="signIn">
                        <div className="signIn__field">
                            <FontAwesomeIcon icon={faUser} className="signIn__icon" />
                            <input type="text" className="signIn__input" placeholder="User name / Email" />
                        </div>
                        <div className="signIn__field">
                            <FontAwesomeIcon icon={faLock} className="signIn__icon" />
                            <input type="password" className="signIn__input" placeholder="Password" />
                        </div>
                        <button className="signIn-button signIn__submit">
                            <span className="signIn-button__text">Sign In Now</span>
                            <span className="signIn-button__icon">
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </span>
                        </button>
                    </form>
                    <div className="signIn-social">
                        <h3>Sign in via</h3>
                        <div className="signIn-social-icons">
                            <span className='signIn-social__icon' onClick={handleGoogleSignIn}>
                                <FontAwesomeIcon style={{color: 'cyan'}} icon={faGoogle}></FontAwesomeIcon>
                            </span>
                            <span className='signIn-social__icon' onClick={handleFacebookSignIn}>
                                <FontAwesomeIcon style={{color: 'blue'}} icon={faFacebook}></FontAwesomeIcon>
                            </span>
                            <span className='signIn-social__icon' onClick={handleGithubSignIn}>
                                <FontAwesomeIcon style={{color: 'black'}} icon={faGithub}></FontAwesomeIcon>
                            </span>
                        </div>
                        <div>
                            <NavLink to='/signUp'><h4 className='signIn-new-acc'>Create An Account?</h4></NavLink>
                        </div>
                    </div>
                </div>
                <div className="signIn-screen__background">
                    <span className="signIn-screen__background__shape screen__background__shape4"></span>
                    <span className="signIn-screen__background__shape screen__background__shape3"></span>
                    <span className="signIn-screen__background__shape screen__background__shape2"></span>
                    <span className="signIn-screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div >
    );
};

export default SignIn;