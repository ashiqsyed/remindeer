"use client"

import React from 'react'
import Link from 'next/link'  //ex: linking Demo to the demo page
import "./Nav.css"
import logo from "../../../../public/Remindeer_PNG.png"
import {useEffect, useState, useContext} from "react"
import UserContext from "../../context/UserContext";
const Nav = () => {
    const {userData, setUserData} = useContext(UserContext);
    const loggedIn = Boolean(localStorage.getItem("auth-token"));
    const handleLogout = () => {
        // localStorage.setItem("loggedIn", "")
        setUserData({token: undefined, user: undefined})
        localStorage.removeItem("auth-token");
        // router.push("/")
    }
    const [inDemo, setInDemo] = useState(false);
    const handleDemoClick = () => {
        setInDemo(true);
    }
    const handleDemoExit = () => {
        localStorage.setItem("inDemo", "");
        
    }
    useEffect(() => {
        if (inDemo) {
            localStorage.setItem("inDemo", inDemo);

        } 
    }, [inDemo])
    return (
        <div className="navBar">
            <div className="nav-left">
                <ul>
                    <li><img src={logo.src} alt="Logo of Remindeer" width="100px"/></li>
                    <li>Remindeer</li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    {loggedIn ? <></> : <li><Link onClick={handleDemoClick} className="nav-link" href='/demo'>Demo</Link></li>}
                    
                    {loggedIn ? 
                    <li><Link className="nav-link" onClick={handleLogout} href="/">Sign Out</Link></li> 
                    : 
                    <li><Link onClick={handleDemoExit} className="nav-link" href="/">Log In</Link></li>}
                </ul>
            </div>
        </div>
    )


}


export default Nav;