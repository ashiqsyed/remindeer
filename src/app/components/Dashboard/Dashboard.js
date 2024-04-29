"use client";
//this path should be /reminders since this is where reminders are displayed
import React from 'react';
import { useState, useEffect, useContext} from 'react';
import ReminderList from '../reminder-list/ReminderList';
import Nav from "../nav/Nav.js"
import './Dashboard.css'; // Import Dashboard-specific styles
import {useRouter} from "next/navigation";
import testImg1 from "../../../../public/pexels-angele-j-128402.jpg";
import testImg2 from "../../../../public/pexels-lumn-167682.jpg";
import testImg3 from "../../../../public/pexels-blue-bird-7210754.jpg";
import UserContext from "../../context/UserContext";
const axios = require("axios");



const Dashboard = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [reminders, setReminders] = useState([]);
  const loggedIn = Boolean(localStorage.getItem("auth-token"));
  const {userData, setUserData} = useContext(UserContext);

   
  useEffect(() => {
    // if (!userData.token) {
    if (!localStorage.getItem("auth-token")) {
      router.push("/");
    }
  }, [])

  useEffect(() => {
    axios.post("http://localhost:1234/api/users/tokenIsValid", userData.token)
    .then((res) => {
      console.log("token is valid")
    })
    .catch((err) => {
      console.log("token is not valid");
      router.push("/");
    })
  }, [])

  useEffect(() => {
    axios.get("http://localhost:1234/api/remindeers/", {headers: {
      // "Authorization": `Bearer ${userData.token}`
      "Authorization": `Bearer ${localStorage.getItem("auth-token")}`
    }})
    .then((res) => {
      setReminders(res.data);
    })
    .catch((err) => console.log(err))

  }, [])

  const handleAdding = () => {
    router.push("/add-reminder")

  }
  const clickHandler = () => {
    setIsClicked(true);
  }

  


  return (
    <div className="outer-container">
      <Nav />
      <div className={ isClicked ? "dashboard-container-clicked" : "dashboard-container"}>
        {/* {localStorage.getItem("auth-token") ? <button className="addReminderBtn" onClick={handleAdding}>+ Add Reminder</button> : <></>} */}
        <button className="addReminderBtn" onClick={handleAdding}>+ Add Reminder</button>
        {/* <ReminderList reminders={testReminders} /> */}
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default Dashboard;
