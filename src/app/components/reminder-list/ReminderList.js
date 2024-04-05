import React from 'react';
import Reminder from '../reminder/Reminder';

const ReminderList = ({ reminders }) => {
  return (
    <div>
      {reminders.map(reminder => (
        <Reminder key={reminder.id} {...reminder} />
      ))}
    </div>
  );
}

export default ReminderList;
