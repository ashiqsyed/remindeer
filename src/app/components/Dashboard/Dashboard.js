"use client";

import React from 'react';
import { useState } from 'react';
import ReminderList from './ReminderList';
import AddReminder from './AddReminder';
import './Dashboard.css'; // Import Dashboard-specific styles

const reminders = [
  { id: 1, title: 'Test Reminder', time: '09:14', description: 'hi' },
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
