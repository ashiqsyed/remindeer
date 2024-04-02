import React from 'react';
import ReminderList from './ReminderList';
import './Dashboard.css'; // Import Dashboard-specific styles

const reminders = [
  { id: 1, title: 'Test Reminder', time: '09:14', description: 'hi' },
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
