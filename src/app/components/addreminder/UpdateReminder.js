"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './AddReminder.css';
const axios = require("axios");

const UpdateReminder = ({ reminderId }) => {
    const [currentReminder, setCurrentReminder] = useState({});
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    // Fetch reminder data 
    useEffect(() => {
        if (reminderId) {
            axios.get(`http://localhost:1234/api/remindeers/${reminderId}`)
            .then((res) => {
                setCurrentReminder(res.data)
                setTitle(res.data.title);
                setDate(new Date(res.data.date));
                setDescription(res.data.description);
                setImageUrl(res.data.img);
            })
            .catch((err) => console.log(`err getting remindeer id ${reminderId} ${err}`));
        }
    }, [])
    
    

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const reminder = {
            title: title,
            date: new Date(date),
            description,
            img: imageUrl
        };
        // console.log("updated reminder");
        // console.log(reminder);
        axios.put(`http://localhost:1234/api/remindeers/${reminderId}`, reminder)
        .then((res) => router.push("/reminders"))
        .catch((err) => console.log(`error updating remindeer id ${reminderId}`));
        setTitle("");
        setDate("");
        setDescription("");
        setImageUrl("");
    };

    return (
        <div className="outer">
            <div className="upper-form">
                <button className="exit-button" onClick={() => router.push("/reminders")}> X </button>
                <h1>Update Reminder...</h1>
            </div>
            <div className="add">
                <form onSubmit={handleSubmit}>
                    <input 
                        id="updated-title"
                        type="text" 
                        placeholder="Title"
                        value={title} 
                        onChange={handleTitleChange} 
                     />
                    <input 
                        id="updated-datetime"
                        type="datetime-local" 
                        value={date} 
                        onChange={handleDateChange} 
                    />
                    <input 
                        id="updated-description"
                        type="text" 
                        placeholder="Description" 
                        value={description} 
                        onChange={handleDescriptionChange} 
                    />
                    <input 
                        id="updated-url"
                        type="text" 
                        placeholder="Image URL" 
                        value={imageUrl} 
                        onChange={handleImageUrlChange} 
                    />
                    <button type="submit">Update Reminder</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReminder;
