"use client"

import LoginPage from "./components/login-page/LoginPage"
import Dashboard from "./components/Dashboard/Dashboard.js"
import Nav from "./components/nav/Nav"
import AddReminder from "./components/addreminder/AddReminder"
import {useState} from "react"
import "./globals.css"
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  }
  return (
    <div className="app-container">
      <LoginPage handleLogin={handleLogin}/>
      {/* <AddReminder /> */}
    </div>
    
  );
}
