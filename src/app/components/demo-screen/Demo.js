"use client"
import testImg1 from "../../../../public/pexels-angele-j-128402.jpg";
import testImg2 from "../../../../public/pexels-lumn-167682.jpg";
import testImg3 from "../../../../public/pexels-blue-bird-7210754.jpg";
import ReminderList from "../reminder-list/ReminderList.js"
import Nav from "../nav/Nav.js"
import {useState, useEffect} from "react"
const axios = require("axios");
const Demo = () => {
    const [isClicked, setIsClicked] = useState(false);
    // const [demoReminders, setDemoReminders] = useState([]);
    const demoReminders = [
        { id: 1, title: 'Walk dogs', date: Date.now(), description: 'walk the dogs', img: testImg3.src },
        {id: 2, title: "Homework", date: Date.now(), description: "do homework", img: testImg2.src},
        {id: 3, title: "Go to the grocery store", date: Date.now(), description: "Eggs, Milk, Bread", img: testImg1.src}
        // Add more reminders as needed
      ];
    
    // useEffect(() => {
    //     axios.get("http://localhost:1234/api/remindeers/unauthenticated-remindeers")
    //     .then((res) => setDemoReminders(res.data))
    //     .catch((err) => console.log(err));
    // }, [])
      const inDemo = Boolean(localStorage.getItem("inDemo"));
      
    return  (
        // <h1>Demo</h1>
        <div className="outer-container">
            <Nav />
            <div className={ isClicked ? "dashboard-container-clicked" : "dashboard-container"}>
                {inDemo ? <></> : <button className="addReminderBtn">+ Add Reminder</button>}
                
                <ReminderList reminders={demoReminders} />
            </div>
        </div>
    )
}

export default Demo;