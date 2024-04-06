"use client"

import LoginPage from "./components/login-page/LoginPage"
import {useState} from "react"

import "./globals.css"
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // let loggedIn = false;
  function handleLogin() {
    setIsLoggedIn(true);
    // loggedIn = true;
    // console.log(`user is logged in: ${loggedIn} (in page.js)`)
    console.log(`in page.js, user is logged in ${isLoggedIn}`)
  }
  return (
    <div className="app-container">
      <LoginPage handleLogin={handleLogin} loggedIn={isLoggedIn}/>
    </div>
    
  );
}
