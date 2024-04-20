"use client";
//this path should be /reminders since this is where reminders are displayed
import React from 'react';
import { useState, useEffect } from 'react';
import ReminderList from '../reminder-list/ReminderList';
import Nav from "../nav/Nav.js"
import './Dashboard.css'; // Import Dashboard-specific styles
import {useRouter, useSearchParams} from "next/navigation";
import testImg1 from "../../../../public/pexels-angele-j-128402.jpg";
import testImg2 from "../../../../public/pexels-lumn-167682.jpg";
import testImg3 from "../../../../public/pexels-blue-bird-7210754.jpg";
const axios = require("axios");



const Dashboard = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1234/api/remindeers/")
    .then((res) => {
      // console.log(res.data);
      setReminders(res.data);
    })
    .catch((err) => console.log("Error retreiving items"))

  }, [])

  const handleAdding = () => {
    
    router.push("/add-reminder")

  }
  const clickHandler = () => {
    setIsClicked(true);
  }

  const loggedIn = localStorage.getItem("loggedIn");
  // console.log(reminders[0])
  // console.log(`id: ${reminders[0]._id}`);
  // console.log(`description: ${reminders[0].description}`);
  // console.log(`img: ${reminders[0].img}`);
  // console.log(`title: ${reminders[0].title}`);
  // console.log(`date: ${reminders[0].date}`);

  return (
    <div className="outer-container">
      <Nav />
      <div className={ isClicked ? "dashboard-container-clicked" : "dashboard-container"}>
        <button className="addReminderBtn" onClick={handleAdding}>+ Add Reminder</button>
        {/* <ReminderList reminders={testReminders} /> */}
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default Dashboard;
