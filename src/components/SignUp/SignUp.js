import { faArrowRight, faAt, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const auth = getAuth();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                updateProfile(auth.currentUser, {
                    displayName: name, phoneNumber: phone //can not add/store phone number without authenticate with phone number
                })
                console.log(user);
            })
            .catch(err => {
                console.error(err.message);
            })

        form.reset();
    }
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="signUp" onSubmit={handleSignUp}>
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faUser} className="signIn__icon" />
                            <input type="text" name='name' className="signUp__input" placeholder="Enter Your Name " required />
                        </div>
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faAt} className="signIn__icon" />
                            <input type="text" name='email' className="signUp__input" placeholder="Enter Your Email" required />
                        </div>
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faLock} className="signIn__icon" />
                            <input type="password" name='password' className="signUp__input" placeholder="Enter Password" required />
                        </div>
                        <div className="signUp__field">
                            <FontAwesomeIcon icon={faPhone} className="signIn__icon" />
                            <input type="number" name='phone' className="signUp__input" placeholder="Enter Your Number" required />
                        </div>
                        <button type='submit' className="button signUp__submit">
                            <span className="button__text">Sign Up</span>
                            <FontAwesomeIcon icon={faArrowRight} className="button__icon" />
                        </button>
                    </form>
                    <div className='signUp-new-acc'>
                        <h4 style={{ marginBottom: '.5rem' }}>Have An Account?</h4>
                        <NavLink to='/signIn' className='link-signIn'>Sign In</NavLink>
                    </div>
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