"use client"
// This is the /home or /root path since this is the unauthenticated view
import "./LoginPage.css";
import LoginForm from "./login-form/LoginForm";
import SignUpForm from "./signup-form/SignUpForm";
import Nav from "../nav/Nav";
import { useState, useContext, useEffect } from 'react'
import UserContext from "../../context/UserContext";
import {useRouter} from "next/navigation";

const LoginPage = (props) => {
    const [mustSignUp, setMustSignUp] = useState(true)
    const {userData, setUserData} = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (userData.token) {
            router.push("/reminders")
        }
    }, [])
    
    
    
    function handleToggleButton() {
        if (mustSignUp) {
            setMustSignUp(false)
        } else {
            setMustSignUp(true)
        }
    }

    return (
    
        <div className="login-page">
            
            <div className="form-container">
                {
                mustSignUp ?
                <div className="signup-form-container">
                    <SignUpForm onSignupClick={props.handleLogin} /> 
                    <div className="alt-option-container">
                        <p>Already have an account?</p> <button className="toggle-button" onClick={handleToggleButton}> Log In</button>
                    </div>
                </div>
                :
                <div className="login-form-container">
                    <LoginForm onLoginClick={props.handleLogin} />

                    <div className="alt-option-container">
                        <p>Don't have an account?</p> <button className="toggle-button" onClick={handleToggleButton}> Create one!</button> 
                    </div>
                    
                </div>
                }
            </div>
            {/* Replace this with react router links?? */}
        </div>
        
    )
}

export default LoginPage