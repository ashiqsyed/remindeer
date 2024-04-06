"use client"

import LoginPage from "./components/login-page/LoginPage"
import {useState} from "react"
import "./globals.css"
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  // setLoggedIn(true);
  const handleLogin = () => {
    // setLoggedIn(prevLogin => !prevLogin);
    setLoggedIn(true);

    console.log(`in page.js - loggedIn: ${loggedIn}`)
  }
  return (
    <div className="app-container">
      <LoginPage handleLogin={handleLogin} loggedIn={loggedIn}/>
    </div>
    
  );
}
