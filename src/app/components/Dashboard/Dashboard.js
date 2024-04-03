import React from 'react';
import ReminderList from './ReminderList';
import './Dashboard.css'; // Import Dashboard-specific styles
//this path should be /reminders since this is where reminders are displayed

const reminders = [
  { id: 1, title: 'Test Reminder', time: '09:14', description: 'hi' },
  {id: 2, title: "Test 2", time: "10:20", description: "test"},
  {id: 3, title: "Test 3", time: "11:00", description: "test again"}
  // Add more reminders as needed
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <button className="addReminderBtn">+ Add Reminder</button>
      <ReminderList reminders={reminders} />
    </div>
  );
}

export default Dashboard;
