import React from 'react'
//import Link from 'next/Link'  *for ze links
import "./Nav.css"
// import remindeerLogo from "../../../public/Remindeer_SVG.svg"
import logo from "../../app/Remindeer_PNG.png"
///Users/ashiqsyed/School/csci-4300/cs4300-project/remindeer/src/app/Remindeer_PNG.png

const Nav = () => {

    console.log(logo.src);
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
                    <li>Demo</li>
                    <li>Signout</li>

                </ul>
            </div>        
        </div>
    )


}


export default Nav;