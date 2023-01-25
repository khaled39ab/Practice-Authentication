import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialSignIn.css'

const SocialSignIn = () => {
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {

    }

    const signInWithFacebook = () => {

    }

    const signInWithGithub = () => {

    }

    return (
        <div>
            <h1>Social Sign In</h1>
            
            <div className='btn-container'>
                <button onClick={() => { signInWithGoogle() }} className='social-btn' id='google-btn'>
                    <span className='btn-icon'>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </span>
                    Sign In With Google
                </button>
                <button onClick={() => signInWithFacebook()} className='social-btn' id='facebook-btn'>
                    <span className='btn-icon'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    Sign In With Facebook
                </button>
                <button onClick={() => signInWithGithub()} className='social-btn' id='github-btn'>
                    <span className='btn-icon'>
                        <FontAwesomeIcon icon={faGithub} />
                    </span>
                    Sign In With Github
                </button>
            </div>
        </div>
    );
};
export default SocialSignIn;