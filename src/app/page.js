"use client"

import LoginPage from "./components/login-page/LoginPage";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";

import "./globals.css"
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  // let loggedIn = false;
  function handleLogin() {
    setIsLoggedIn(true);
    // loggedIn = true;
    // console.log(`user is logged in: ${loggedIn} (in page.js)`)
  }
  
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/reminders");
      console.log(`in page.js, user is logged in ${isLoggedIn}`)
    }
  }, [isLoggedIn])
  return (
    <div className="app-container">
      <LoginPage handleLogin={handleLogin} loggedIn={isLoggedIn}/>
    </div>
    
  );
}
