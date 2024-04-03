"use client";

import React from 'react';
import { useState } from 'react';
import ReminderList from './ReminderList';
import Nav from "../Nav.js"
import AddReminder from './AddReminder';
import './Dashboard.css'; // Import Dashboard-specific styles
import {useRouter} from "next/navigation";
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
    { id: 1, title: 'Test Reminder', time: '09:14', description: 'hi' },
    {id: 2, title: "Test 2", time: "10:20", description: "test"},
    {id: 3, title: "Test 3", time: "11:00", description: "test again"}
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
