"use client"

import "./viewreminder.css"
const axios = require("axios");
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
const Page = ({params}) => {
    const [currentReminder, setCurrentReminder] = useState({});
    const router = useRouter();
    useEffect(() => {
        if (params.id) {
            axios.get(`http://localhost:1234/api/remindeers/${params.id}`)
            .then((res) => setCurrentReminder(res.data))
            .catch((err) => console.log(`Error retrieving Remindeer ID ${params.id}`));

        }
    }, [])

    const reminderDate = new Date(currentReminder.date).toLocaleDateString();
    const reminderTime = new Date(currentReminder.date).toLocaleTimeString();
    const reminderDateTime = reminderDate + " at " + reminderTime;

    const handleBackButton = () => {
        router.push("/reminders");
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:1234/api/remindeers/${params.id}`)
        .then((res) => router.push("/reminders"))
        .catch((err) => console.log(`Error deleting Remindeer ID ${params.id}`));
    }    
    return (
        <div className="reminder-view">
            <div className="back-button-container">
                <button className="back-button" onClick={handleBackButton}> X </button>
            </div>
            
            <h1 className="reminder-title">{currentReminder.title}</h1>
            
            <div className="reminder-info">
                <img id="reminder-image" src={currentReminder.img} alt={currentReminder.img} />
                <div className="info-container">
                    <p>Do on {reminderDateTime}</p>
                    <p className="reminder-description">Description: {currentReminder.description}</p>
                </div>
                
            </div>
            <div className="options-container">
                <button className="edit-button" onClick={() => console.log(`Edit Remindeer ${params.id}`)}>Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>

    );
}

export default Page;