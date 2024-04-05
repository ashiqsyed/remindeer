"use client";

import React from 'react';
import { useState } from 'react';
import ReminderList from '../reminder-list/ReminderList';
import Nav from "../nav/Nav.js"
import './Dashboard.css'; // Import Dashboard-specific styles
import {useRouter} from "next/navigation";
import testImg1 from "../../../../public/pexels-angele-j-128402.jpg";
import testImg2 from "../../../../public/pexels-lumn-167682.jpg";
import testImg3 from "../../../../public/pexels-blue-bird-7210754.jpg";

//this path should be /reminders since this is where reminders are displayed

const Dashboard = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdding = () => {
    if (isAdding) {
      setIsAdding(false);
    } else {
      setIsAdding(true);
    }

    router.push("/add-reminder")

  }
  const clickHandler = () => {
    setIsClicked(true);
  }

  const reminders = [
    { id: 1, title: 'Walk dogs', time: '09:14', description: 'walk the dogs', image: testImg3.src },
    {id: 2, title: "Homework", time: "10:20", description: "do homework", image: testImg2.src},
    {id: 3, title: "Go to the grocery store", time: "11:00", description: "Eggs, Milk, Bread", image: testImg1.src}
    // Add more reminders as needed
  ];

  return (
    <div className="outer-container">
      <Nav />
      <div className={ isClicked ? "dashboard-container-clicked" : "dashboard-container"}>
        <button className="addReminderBtn" onClick={handleAdding}>+ Add Reminder</button>
        <ReminderList reminders={reminders} />
        {/* {isAdding ? <AddReminder isAdding={isAdding} handleExit={handleAdding}/> : <></>} */}
      </div>
    </div>
  );
}

export default Dashboard;
