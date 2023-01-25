import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

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
            
            <div>
                <button onClick={() => { signInWithGoogle() }} className=''>
                    <span className=''>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </span>
                    Sign In With Google
                </button>
                <button onClick={() => signInWithFacebook()} className=''>
                    <span className=''>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    Sign In With Facebook
                </button>
                <button onClick={() => signInWithGithub()} className=''>
                    <span className=''>
                        <FontAwesomeIcon icon={faGithub} />
                    </span>
                    Sign In With Github
                </button>
            </div>
        </div>
    );
};
export default SocialSignIn;