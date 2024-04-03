"use client"

import "./LoginPage.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useState } from 'react'

const LoginPage = () => {
    const [mustSignUp, setMustSignUp] = useState(true)
    function handleClick() {
        if (mustSignUp) {
            setMustSignUp(false)
        } else {
            setMustSignUp(true)
        }
    }

    return (
        <div className="login-page">
            <div className="navbar">Navbar</div>
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
                    <LoginForm />
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