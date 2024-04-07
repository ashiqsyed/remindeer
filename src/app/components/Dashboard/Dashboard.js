"use client";

import React from 'react';
import { useState } from 'react';
import ReminderList from '../reminder-list/ReminderList';
import Nav from "../nav/Nav.js"
import './Dashboard.css'; // Import Dashboard-specific styles
import {useRouter, useSearchParams} from "next/navigation";
import testImg1 from "../../../../public/pexels-angele-j-128402.jpg";
import testImg2 from "../../../../public/pexels-lumn-167682.jpg";
import testImg3 from "../../../../public/pexels-blue-bird-7210754.jpg";

//this path should be /reminders since this is where reminders are displayed

const Dashboard = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleAdding = () => {
    
    router.push("/add-reminder")

  }
  const clickHandler = () => {
    setIsClicked(true);
  }

  const loggedIn = localStorage.getItem("loggedIn");


  

  const reminders = [
    { id: 1, title: 'Walk dogs', date: '09:14', description: 'walk the dogs', image: testImg3.src },
    {id: 2, title: "Homework", date: "10:20", description: "do homework", image: testImg2.src},
    {id: 3, title: "Go to the grocery store", date: "11:00", description: "Eggs, Milk, Bread", image: testImg1.src}
    // Add more reminders as needed
  ];

  return (
    <div className="outer-container">
      <Nav />
      <div className={ isClicked ? "dashboard-container-clicked" : "dashboard-container"}>
        <button className="addReminderBtn" onClick={handleAdding}>+ Add Reminder</button>
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default Dashboard;
