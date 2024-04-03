"use client"
// This is the /home or /root path since this is the unauthenticated view
import "./LoginPage.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Nav from "./Nav";
import { useState } from 'react'

const LoginPage = () => {
    const [mustSignUp, setMustSignUp] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLoginClick() {
        // e.preventDefault();
        setIsLoggedIn(true);
        console.log(`you are logged in: ${isLoggedIn}`)
    }
    function handleClick() {
        if (mustSignUp) {
            setMustSignUp(false)
        } else {
            setMustSignUp(true)
        }
    }

    return (
        <div className="login-page">
            {/* <div className="navbar">Navbar</div> */}
            <Nav />
            <div className="form-container">
                {
                mustSignUp ?
                <div className="signup-form-container">
                    <SignUpForm /> 
                    <div className="alt-option-container">
                        <p>Already have an account?</p> <button onClick={handleClick}> Log In</button>
                    </div>
                </div>
                :
                <div className="login-form-container">
                    <LoginForm onLoginClick={handleLoginClick} />
                    <div className="alt-option-container">
                        <p>Don't have an account?</p> <button onClick={handleClick}> Create one!</button> 
                    </div>
                    
                </div>
                }

            </div>
            {/* Replace this with react router links?? */}
        </div>
    )
}

export default LoginPage