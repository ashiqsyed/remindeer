import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <div className="navBar">

            <div className="nev-left">
                <ul>
                    <li> <p><img src="Remindeer_SVG.svg" alt="Logo of Remindeer"/></p></li>
                    <li><h2>Remindeer</h2> </li>
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