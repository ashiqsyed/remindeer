import React from 'react'
import "./Nav.css"
// import remindeerLogo from "../../../public/Remindeer_SVG.svg"
import logo from "../../../public/Remindeer_SVG.svg";


const Nav = () => {
    return (
        <div className="navBar">

            <div className="nav-left">
                <ul>
                    <li><img src={logo} alt="Logo of Remindeer" width="100px"/></li>
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