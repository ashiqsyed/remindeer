import React from 'react';
import styles from './Reminder.module.css';

const Reminder = ({ title, time, description, image }) => {
  return (
    <div className={styles.reminderItem}>
      <div className="image-container">
        <img className={styles.reminderImg} src={image} alt={image}/>
      </div>
      <div className={styles.reminderInfo}>
        <h3>{title}</h3>
        <p>{time}</p>
        <p>{description}</p>
      </div>
      
      
    </div>
  );
}

export default Reminder;
