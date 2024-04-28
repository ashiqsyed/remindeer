"use client"
// This is the /home or /root path since this is the unauthenticated view
// import "./LoginPage.css";
import LoginForm from "./LoginForm";
import SignUpForm from "../signup-page/SignUpForm";
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
        router.push("/signup")
    }

    return (
    
        <div className="login-page">
            <Nav userData={userData} />
            <div className="login-page-content">
                {/* {
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
                } */}
                <div className="form-wrapper">
                    <LoginForm onLoginClick={props.handleLogin} />
                    <div className="alt-option-container">
                        <p>Don't have an account?</p> <button className="toggle-button" onClick={handleToggleButton}> Create one!</button> 
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default LoginPage