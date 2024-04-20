import React from 'react';
import styles from './Reminder.module.css';
import {useRouter} from "next/navigation";

const axios = require("axios");
const Reminder = ({ title, date, description, img, id }) => {
  const router = useRouter();
  let reminderDate = new Date(date).toLocaleDateString();
  let reminderTime = new Date(date).toLocaleTimeString();
  let reminderDateTime = reminderDate + " at " + reminderTime;
  const onClick = () => {
    // console.log(title);
    // console.log(date);
    // console.log(description);
    // console.log(img);
    // console.log(id);
  }

  const handleDelete = () => {
    // console.log(`delete remindeer ${id}`);

    axios.delete(`http://localhost:1234/api/remindeers/${id}`)
    .then((res) => {router.refresh()})
    .catch((err) => console.log(`Error deleting Remindeer ${id}`));
  }
  
  return (
    <div className={styles.reminderItem} onClick={onClick}>
      <div className="image-container">
        <img className={styles.reminderImg} src={img} alt={img}/>
      </div>
      <div className={styles.reminderInfo} id={id}>
        <h3>{title}</h3>
        <p>{reminderDateTime} </p>
        <p>{description}</p>
      </div>
      {/* Edit and Delete buttons for CRUD operation, add implementation once we learn about backend and rendering individual reminders by 
      making server and database requests. We need to add implementation for viewing individual reminders when we learn about requesting info
      from the backend*/}
      <div className={styles.buttonContainer}>
        <button className={styles.editButton}>Edit</button>
        <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
      </div>
      
      
    </div>
  );
}

export default Reminder;
