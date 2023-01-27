import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './SignIn.css'

const SignIn = () => {
    return (
        <div className="signIn-container">
            <div className="signIn-screen">
                <div className="signIn-screen__content">
                    <form className="signIn">
                        <div className="signIn__field">
                            <i className="signIn__icon fas fa-user"></i>
                            <input type="text" className="signIn__input" placeholder="User name / Email" />
                        </div>
                        <div className="signIn__field">
                            <i className="signIn__icon fas fa-lock"></i>
                            <input type="password" className="signIn__input" placeholder="Password" />
                        </div>
                        <button className="signIn-button login__submit">
                            <span className="signIn-button__text">Sign In Now</span>
                            <span className="signIn-button__icon">
                                <FontAwesomeIcon icon={faArrowRight} /> 
                            </span>
                        </button>
                    </form>
                    <div className="signIn-social">
                        <h3>Sign in via</h3>
                        <div className="signIn-social-icons">
                            <span className='signIn-social__icon'>
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                            </span>
                            <span className='signIn-social__icon'>
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </span>
                            <span className='signIn-social__icon'>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </span>
                        </div>
                        <h4 className='new-acc'>Create An Account</h4>
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