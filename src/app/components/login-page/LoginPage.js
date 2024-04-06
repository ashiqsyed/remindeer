"use client"
// This is the /home or /root path since this is the unauthenticated view
import "./LoginPage.css";
import LoginForm from "./login-form/LoginForm";
import SignUpForm from "./signup-form/SignUpForm";
import Nav from "../nav/Nav";
import { useState } from 'react'

const LoginPage = (props) => {
    const [mustSignUp, setMustSignUp] = useState(true)
    
    
    function handleToggleButton() {
        if (mustSignUp) {
            setMustSignUp(false)
        } else {
            setMustSignUp(true)
        }
    }

    return (
        <div className="login-page">
            <Nav loggedIn={props.loggedIn}/>
            <div className="form-container">
                {
                mustSignUp ?
                <div className="signup-form-container">
                    <SignUpForm /> 
                    <div className="alt-option-container">
                        <p>Already have an account?</p> <button onClick={handleToggleButton}> Log In</button>
                    </div>
                </div>
                :
                <div className="login-form-container">
                    <LoginForm onLoginClick={props.handleLogin} loggedIn={props.loggedIn}/>

                    <div className="alt-option-container">
                        <p>Don't have an account?</p> <button onClick={handleToggleButton}> Create one!</button> 
                    </div>
                    
                </div>
                }

            </div>
            {/* Replace this with react router links?? */}
        </div>
    )
}

export default LoginPage