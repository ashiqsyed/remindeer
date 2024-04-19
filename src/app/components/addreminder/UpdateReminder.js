"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './AddReminder.css';

const UpdateReminder = ({ reminderId }) => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // Fetch reminder data 
    useEffect(() => {
        async function fetchReminderData() {
            const response = await fetch(`/api/reminders/${reminderId}`);
            const reminder = await response.json();
            setTitle(reminder.title);
            setDate(new Date(reminder.date).toISOString().slice(0, 16)); // Adjust for datetime-local input
            setDescription(reminder.description);
            setImageUrl(reminder.image);
        }

        if (reminderId) {
            fetchReminderData();
        }
    }, [reminderId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const reminder = {
            title,
            date: new Date(date),
            description,
            image: imageUrl
        };

        // update in backend!
        fetch(`/api/reminders/${reminderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reminder),
        }).then(() => router.push("/reminders"));
    };

    return (
        <div className="outer">
            <div className="upper-form">
                <button className="exit-button" onClick={() => router.push("/reminders")}> X </button>
                <h1>Update Reminder...</h1>
            </div>
            <div className="add">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
                    <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                    <button type="submit">Update Reminder</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReminder;
