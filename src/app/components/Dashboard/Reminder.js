import React from 'react';
import styles from './Reminder.module.css';

const Reminder = ({ title, time, description }) => {
  return (
    <div className={styles.reminderItem}>
      <h3>{title}</h3>
      <p>{time}</p>
      <p>{description}</p>
    </div>
  );
}

export default Reminder;
