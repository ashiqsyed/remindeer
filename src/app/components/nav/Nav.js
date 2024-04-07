"use client"

import React from 'react'
import Link from 'next/link'  //ex: linking Demo to the demo page
import "./Nav.css"
import logo from "../../../../public/Remindeer_PNG.png"
import {useEffect} from "react"
const Nav = () => {
    const loggedIn = Boolean(localStorage.getItem("loggedIn"));
    const handleLogout = () => {
        localStorage.setItem("loggedIn", "")
    }

    
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
                    <li><Link className="nav-link" href='/demo'>Demo</Link></li>
                    {loggedIn ? 
                    <li><Link className="nav-link" onClick={handleLogout} href="/">Sign Out</Link></li> 
                    : 
                    <li><Link className="nav-link" href="/">Log In</Link></li>}
                </ul>
            </div>

        </div>
    )


}


export default Nav;