"use client"

import "./viewreminder.css"
const axios = require("axios");
import {useEffect, useState, useContext} from "react";
import {useRouter} from "next/navigation";
import UserContext from "../../context/UserContext";
const Page = ({params}) => {
    const [currentReminder, setCurrentReminder] = useState({});
    const router = useRouter();
    const {userData, setUserData} = useContext(UserContext);
    // const loggedIn = Boolean(localStorage.getItem("auth-token"));
    useEffect(() => {
        // if (!userData.token) {
        if (!localStorage.getItem("auth-token")) {
            router.push("/");
        }
    }, [])
    useEffect(() => {
        if (params.id) {
            axios.get(`http://localhost:1234/api/remindeers/${params.id}`, {
                headers: {
                    // "Authorization": `Bearer ${userData.token}`
                    "Authorization": `Bearer ${localStorage.getItem("auth-token")}`
                }
            })
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
        axios.delete(`http://localhost:1234/api/remindeers/${params.id}`, {
            headers: {
                // "Authorization": `Bearer ${userData.token}`
                "Authorization": `Bearer ${localStorage.getItem("auth-token")}`
            }
        })
        .then((res) => router.push("/reminders"))
        .catch((err) => console.log(`Error deleting Remindeer ID ${params.id}`));
    }
    const handleEdit = () => {
        router.push(`/update-reminder/${params.id}`);
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
                    <p className="reminder-description">Do on {reminderDateTime}</p> <br />
                    <p className="reminder-description">Description: {currentReminder.description}</p>
                </div>
                
            </div>
            <div className="options-container">
                <button className="edit-button" onClick={handleEdit}>Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>

    );
}

export default Page;