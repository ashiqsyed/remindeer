"use client";

import React from 'react';
import { useState } from 'react';
import ReminderList from './ReminderList';
import AddReminder from './AddReminder';
import './Dashboard.css'; // Import Dashboard-specific styles
//this path should be /reminders since this is where reminders are displayed

const reminders = [
  { id: 1, title: 'Test Reminder', time: '09:14', description: 'hi' },
  {id: 2, title: "Test 2", time: "10:20", description: "test"},
  {id: 3, title: "Test 3", time: "11:00", description: "test again"}
  // Add more reminders as needed
];

const Dashboard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(true);
  }

  return (
    <div className="outer-container">
      <div className={ isClicked ? "dashboard-container-clicked" : "dashboard-container"}>
        <button className="addReminderBtn" onClick={clickHandler}>+ Add Reminder</button>
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default Dashboard;
