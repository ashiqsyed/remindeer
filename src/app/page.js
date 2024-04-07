"use client"

import LoginPage from "./components/login-page/LoginPage";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";

import "./globals.css"
export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  function handleLogin() {
    setIsLoggedIn(true);
  }
  
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/reminders");

      localStorage.setItem("loggedIn", isLoggedIn)
      // console.log(`user is logged in: ${localStorage.getItem("loggedIn")}`)
    } else {
      // console.log(`user is logged in: ${Boolean(localStorage.getItem("loggedIn"))}`)
    }
  }, [isLoggedIn])
  return (
    <div className="app-container">
      <LoginPage handleLogin={handleLogin} loggedIn={isLoggedIn}/>
    </div>
    
  );
}
