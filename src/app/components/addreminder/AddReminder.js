"use client"
import React, { useState, useEffect, useContext} from 'react';
import { useRouter } from 'next/navigation';
import './AddReminder.css';
const axios = require("axios");
import UserContext from "../../context/UserContext";

const AddReminder = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    // const loggedIn = Boolean(localStorage.getItem("auth-token"));
    const {userData, setUserData} = useContext(UserContext);
    useEffect(() => {
        // if (!userData.token) {
        if (!localStorage.getItem("auth-token")) {
            router.push("/");
            // alert("You must be logged in.");
        }
    }, [])
    const handleTitleChange = (event) => { setTitle(event.target.value); };

    const handleDateChange = (event) => { setDate(event.target.value); };

    const handleDescriptionChange = (event) => { setDescription(event.target.value); };

    const handleImageUrlChange = (event) => { setImageUrl(event.target.value); };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title === "" || date === "" || description === "" || imageUrl == "") {
            alert("You must provide a title, date, description, and image url for a reminder.");
        } else {
            const reminder = {
                title: title,
                date: new Date(date),
                description: description,
                img: imageUrl
            };
    
            // HERE is where we will probably send the reminder data to the backend
            axios.post("http://localhost:1234/api/remindeers/", reminder, {
                headers: {
                    // "Authorization": `Bearer ${userData.token}`
                    "Authorization": `Bearer ${localStorage.getItem("auth-token")}`
                }
            })
            .then((res) => {
                setTitle("");
                setDate("");
                setDescription("");
                setImageUrl("");

                router.push("/reminders");
            })
            .catch((err) => {console.log(err)})
        }
    };

    return (
        <div className="outer">
            <div className="upper-form">
                <button className="exit-button" onClick={() => router.push("/reminders")}> X </button>
                <h1>New Reminder...</h1>
            </div>
            <div className="add">
                <form onSubmit={handleSubmit}>
                    <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        onChange={handleTitleChange}
                        value={title}
                        className="reminder-title-input"
                    />
                    <input
                        id="date"
                        type="datetime-local"
                        onChange={handleDateChange}
                        value={date}
                        className="reminder-date"
                    />
                    <input
                        id="description"
                        type="text"
                        placeholder="Description"
                        onChange={handleDescriptionChange}
                        value={description}
                        className="reminder-description-input"
                    />
                    <input
                        id="image-url"
                        type="text"
                        placeholder="Image URL"
                        onChange={handleImageUrlChange}
                        value={imageUrl}
                        className="reminder-img"
                    />
                    <button type="submit">Create Reminder</button>
                </form>
            </div>
        </div>
    );
};

export default AddReminder;
