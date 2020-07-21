import React from 'react'
import './Reminder.css'

function Reminder(props) {
    return (
        <div className="Reminder" >
            <div className="Reminder-Info">
                <div className="Top-Info">
                    <h3>{props.reminder.name}</h3>
                    <h3>{props.reminder.email}</h3>
                    <h3>{props.reminder.date} | {props.reminder.time}</h3>
                    <h3>{props.reminder.title}</h3>
                </div>
                <p>{props.reminder.message}</p>
            </div>
            <button className="ReminderDelete">-</button>
        </div>
    );
}

export default Reminder
