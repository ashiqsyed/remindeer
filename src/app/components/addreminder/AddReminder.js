"use client"

import React from 'react';
import {useRouter} from "next/navigation"
import './AddReminder.css';

const AddReminder = (props) => {
    const router = useRouter();
    return (
      <div className="outer">
        <div className="upper-form">
            <button className="exit-button" onClick={() => router.push("/reminders")}> X </button>
            <h1>New Reminder...</h1>

        </div>
        <div className="add">
            <form>
                <input 
                    id="title"
                    type="text"
                    placeholder="Title"
                />
                <input 
                    id="date"
                    type="datetime-local"

                />
                <input
                    id="description"
                    type="text"
                    placeholder="Description"
                />
                <input 
                    id="image-url"
                    type="text"
                    placeholder="Image URL"
                />
                {/* <button onClick={() => router.push("/reminders")} className="submit">Create Reminder</button> */}
                <button onClick={(e) => {
                    e.preventDefault()
                    router.push("/reminders")

                    }}
                >
                        Create Reminder
                </button>
            </form>
        </div> 
      </div>
    );
};

export default AddReminder;