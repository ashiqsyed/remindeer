"use client"

import LoginPage from "./components/login-page/LoginPage";
import {useState, useEffect, useContext} from "react";
import {useRouter} from "next/navigation";
import { UserProvider } from "./context/UserContext";
import Nav from "./components/nav/Nav"

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
    } 
  }, [isLoggedIn])
  
  return (

    <UserProvider>
      <div className="app-container">
        <Nav />
        <LoginPage handleLogin={handleLogin} loggedIn={isLoggedIn}/>
      </div>
    </UserProvider>
    
  );
}
