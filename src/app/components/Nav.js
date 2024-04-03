import React from 'react'
//import Link from 'next/Link'  *for ze links
import "./Nav.css"

const Nav = () => {
    return (
        <div className="navBar">
            <div className="nav-Left">
                    <img src="Remindeer_SVG.svg" alt="Logo of Remindeer"/>
                    <h2>Remindeer</h2>
            </div>
            <div className="nav-Right">
                    <h2>Demo</h2>
                    <h2>Login</h2>
            </div>        
        </div>
    )


}


export default Nav;