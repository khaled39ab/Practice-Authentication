import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import './SignIn.css'
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { AuthContext } from '../../context/UserContext';

const SignIn = () => {

    // const GoogleProvider = new GoogleAuthProvider();
    // const GithubProvider = new GithubAuthProvider();
    // const FacebookProvider = new FacebookAuthProvider();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { facebookSignIn, googleSignIn, githubSignIn, passwordSignIn } = useContext(AuthContext);

    /* 
    ===============================================================================
    *************************         Google Auth         *************************
    ===============================================================================
    */
    const handleGoogleSignIn = () => {
        // signInWithPopup(auth, GoogleProvider)
        googleSignIn()
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate('/');
            })
            .catch(err => {
                setError(err.message);
            })
    }

    /* 
    ===============================================================================
    *************************        Facebook Auth        *************************
    ===============================================================================
    */
    const handleFacebookSignIn = () => {
        // signInWithPopup(auth, FacebookProvider)
        facebookSignIn()
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate('/');
            })
            .catch(err => {
                setError(err.message);
            })

    }

    /* 
    ===============================================================================
    *************************         Github Auth         *************************
    ===============================================================================
    */
    const handleGithubSignIn = () => {
        // signInWithPopup(auth, GithubProvider)
        githubSignIn()
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate('/');
            })
            .catch(err => {
                setError(err.message);
            })
    }

    /* 
    ===============================================================================
    *************************           Sign In           *************************
    ===============================================================================
    */
    const handleSignIn = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // signInWithEmailAndPassword(auth, email, password)
        passwordSignIn(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate('/');
            })
            .catch(err => {
                setError(err.message);
            })
    }

    /* 
    ===============================================================================
    *************************       Forget Password       *************************
    ===============================================================================
    */

    const handleForgetPassword = () => {
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Email Send. Check Your Email")
                })
        } else {
            alert('Enter Your Email')
        }
    }

    return (
        <div className="signIn-container">
            <div className="signIn-screen">
                <div className="signIn-screen__content">
                    <form className="signIn" onSubmit={handleSignIn}>
                        <div className="signIn__field">
                            <FontAwesomeIcon icon={faUser} className="signIn__icon" />
                            <input type="text" name='email' className="signIn__input" placeholder="User name / Email" onChange={e => setEmail(e.target.value)} required/>
                        </div>
                        <div className="signIn__field">
                            <FontAwesomeIcon icon={faLock} className="signIn__icon" />
                            <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} className="signIn__input" placeholder="Password" required/>
                        </div>
                        {
                            error && <div className='error-message'>({error.split('/')[1]}</div>
                        }
                        <button className="signIn-button signIn__submit" type='submit'>
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
                                <FontAwesomeIcon style={{ color: 'cyan' }} icon={faGoogle} title='Google'></FontAwesomeIcon>
                            </span>
                            <span className='signIn-social__icon' onClick={handleFacebookSignIn}>
                                <FontAwesomeIcon style={{ color: 'blue' }} icon={faFacebook} title="Facebook"></FontAwesomeIcon>
                            </span>
                            <span className='signIn-social__icon' onClick={handleGithubSignIn}>
                                <FontAwesomeIcon style={{ color: 'black' }} icon={faGithub} title='Github'></FontAwesomeIcon>
                            </span>
                        </div>
                        <div>
                            <NavLink to='/signUp'><h4 className='signIn-new-acc'>Create An Account?</h4></NavLink>
                        </div>
                    </div>
                    <div className='forget-password' onClick={handleForgetPassword}>
                        <p>Forget Password?</p>
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