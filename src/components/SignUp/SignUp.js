import { faArrowRight, faAt, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="signUp">
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faUser} className="signIn__icon" />
                            <input type="text" className="signUp__input" placeholder="Enter Your Name " />
                        </div>
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faAt} className="signIn__icon" />
                            <input type="text" className="signUp__input" placeholder="Enter Your Email" />
                        </div>
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faLock} className="signIn__icon" />
                            <input type="password" className="signUp__input" placeholder="Enter Password" />
                        </div>
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faPhone} className="signIn__icon" />
                            <input type="number" className="signUp__input" placeholder="Enter Your Number" />
                        </div>
                        <button className="button signUp__submit">
                            <span className="button__text">Sign Up</span>
                            <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                        </button>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;