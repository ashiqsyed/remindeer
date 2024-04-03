import React from 'react';
import './AddReminder.css';

const AddReminder = () => {
    return (
      <div className="outer">
        <div className="add">
            <h2>New Reminder...</h2>
            <form>
                <label>Time</label>
                <input
                    id="time"
                    type="text"
                    /* value={enteredTime}
                    onChange={timeChangeHandler} */
                />
                <label>Description</label>
                <input
                    id="description"
                    type="text"
                    /* value={enteredDescription}
                    onChange={descriptionChangeHandler} */
                />
                <button type="submit" className="submit">Create Reminder</button>
            </form>
        </div> 
      </div>
    );
};

export default AddReminder;