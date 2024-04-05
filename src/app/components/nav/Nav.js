import React from 'react'
import Link from 'next/link'  //ex: linking Demo to the demo page
import "./Nav.css"
import logo from "../../../../public/Remindeer_PNG.png"

const Nav = () => {

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
                    <li><Link href='/demo'>Demo</Link></li>
                    <li><Link href="/">Log In</Link></li>

                </ul>
            </div>        
        </div>
    )


}


export default Nav;