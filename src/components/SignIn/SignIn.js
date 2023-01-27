import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './SignIn.css'

const SignIn = () => {
    return (
        <div class="signIn-container">
            <div class="signIn-screen">
                <div class="signIn-screen__content">
                    <form class="signIn-login">
                        <div class="signIn-login__field">
                            <i class="signIn-login__icon fas fa-user"></i>
                            <input type="text" class="signIn-login__input" placeholder="User name / Email" />
                        </div>
                        <div class="signIn-login__field">
                            <i class="signIn-login__icon fas fa-lock"></i>
                            <input type="password" class="signIn-login__input" placeholder="Password" />
                        </div>
                        <button class="signIn-button login__submit">
                            <span class="signIn-button__text">Sign In Now</span>
                            <span class="signIn-button__icon">
                                <FontAwesomeIcon icon={faArrowRight} /> 
                            </span>
                        </button>
                    </form>
                    <div class="signIn-social-login">
                        <h3>Sign in via</h3>
                        <div class="signIn-social-icons">
                            <span className='social-login__icon'>
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                            </span>
                            <span className='social-login__icon'>
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </span>
                            <span className='social-login__icon'>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </span>
                        </div>
                        <h4 className='new-acc'>Create An Account</h4>
                    </div>
                </div>
                <div class="signIn-screen__background">
                    <span class="signIn-screen__background__shape screen__background__shape4"></span>
                    <span class="signIn-screen__background__shape screen__background__shape3"></span>
                    <span class="signIn-screen__background__shape screen__background__shape2"></span>
                    <span class="signIn-screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div >
    );
};

export default SignIn;