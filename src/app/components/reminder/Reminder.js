import React from 'react';
import styles from './Reminder.module.css';
import {useRouter} from "next/navigation";

const axios = require("axios");
const Reminder = ({ title, date, description, img, id}) => {
  const router = useRouter();
  let reminderDate = new Date(date).toLocaleDateString();
  let reminderTime = new Date(date).toLocaleTimeString();
  let reminderDateTime = reminderDate + " at " + reminderTime;
  const inDemo = Boolean(localStorage.getItem("inDemo"));
  
  const onClick = () => {
    // console.log(title);
    // console.log(date);
    // console.log(description);
    // console.log(img);
    // console.log(id);
  }

  // const handleDelete = () => {
    // console.log(`delete remindeer ${id}`);

  //   axios.delete(`http://localhost:1234/api/remindeers/${id}`)
  //   .then((res) => {router.refresh()})
  //   .catch((err) => console.log(`Error deleting Remindeer ${id}`));
  // }
  
    const handleView = () => {
      // console.log(`view Remindeer id ${id}`);
      router.push(`/view-reminder/${id}`);
    }
    
  return (
    <div className={styles.reminderItem} onClick={onClick}>
      <div className={styles.imgContainer}>
        <img className={styles.reminderImg} src={img} alt={img}/>
      </div>
      <div className={styles.reminderInfo} id={id}>
        <h3>{title}</h3>
        <p>{reminderDateTime}</p>
        <p>{description}</p>
      </div>
      <div className={styles.buttonContainer}>
        {inDemo ? <></> : <button className={styles.viewButton} onClick={handleView}>View</button>}
      </div>
    </div>
  );
}

export default Reminder;
