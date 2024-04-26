import React from 'react';
import Reminder from '../reminder/Reminder';

const ReminderList = ({ reminders}) => {


  // console.log("in reminderlist.js");
  console.log(reminders)
  // console.log(reminders[0]._id)
  return (
    <div>
      {reminders.map(reminder => (
        <Reminder 
        key={reminder._id}
        id={reminder._id}
        description={reminder.description}
        img={reminder.img}
        title={reminder.title}
        date={reminder.date}
        />
      ))}
    </div>
  );
}

export default ReminderList;
