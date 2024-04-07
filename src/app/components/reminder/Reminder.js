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
      {/* Edit and Delete buttons for CRUD operation, add implementation once we learn about backend and rendering individual reminders by 
      making server and database requests. We need to add implementation for viewing individual reminders when we learn about requesting info
      from the backend*/}
      <div className={styles.buttonContainer}>
        <button className={styles.editButton}>Edit</button>
        <button className={styles.deleteButton}>Delete</button>
      </div>
      
      
    </div>
  );
}

export default Reminder;
