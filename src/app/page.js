"use client"

import LoginPage from "./components/login-page/LoginPage";
import {useState, useEffect, useContext} from "react";
import {useRouter} from "next/navigation";
import { UserProvider } from "./context/UserContext";
import Nav from "./components/nav/Nav"
import UserContext from "./context/UserContext";
import "./globals.css"
import LandingPage from "./components/landing-page/LandingPage";
export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {userData, setUserData} = useContext(UserContext);
  // function handleLogin() {
  //   setIsLoggedIn(true);
  // }
  
  useEffect(() => {
    if (userData.token) {
      router.push("/reminders");
      // localStorage.setItem("loggedIn", isLoggedIn)
    } 
  }, [])
  
  return (

    
      <div className="app-container">
         <LandingPage />
      </div>
    
    
  );
}
