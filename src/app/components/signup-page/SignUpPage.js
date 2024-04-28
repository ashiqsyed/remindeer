"use client"
import { useContext, useEffect } from "react";
import Nav from "../nav/Nav";
import UserContext from "../../context/UserContext";
import SignUpForm from "./SignUpForm";
import { useRouter } from "next/navigation";
import "./SignUpPage.css";
const SignUpPage = (props) => {
    const {userData, setUserData} = useContext(UserContext);
    const router = useRouter();
    const handleToggleButton = () => {
        router.push("/login")
    }
    useEffect(() => {
        if (userData.token) {
            router.push("/reminders")
        }
    }, [])
    return (
        
        <div className="signup-page">
            <Nav userData={userData} />
            <div className="signup-page-content">
                <div className="form-wrapper">
                    <SignUpForm onSignupClick={props.handleLogin} /> 
                    <div className="alt-option-container">
                        <p className="alt-option-text">Already have an account?</p> <button className="toggle-button" onClick={handleToggleButton}> Log In</button>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default SignUpPage;