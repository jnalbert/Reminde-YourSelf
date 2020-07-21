import React from 'react';
import './RemindersList.css';
import Reminder from '../Reminder/Reminder'

function RemindersList(props) {
    return (
        <div className="contaner">
            <h1>Your Reminders</h1>
            <div className="RemindersList" >
            {
                props.reminders.map(reminder => {
                    return  <Reminder reminder={reminder} key={reminder.id} />
                })
            } 
            </div>

        </div>
    );
}

export default RemindersList