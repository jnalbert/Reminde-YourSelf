import React from 'react'
import './Reminder.css'
import ReminderUtil from '../util/util';

function Reminder(props) {


    const onRemove = (event) => {
        ReminderUtil.deletReminder(props.reminder)
        window.location.reload(true)
    }

    const reminderDate = props.reminder.reminder_date
    console.log(reminderDate)

    return (
        <div className="Reminder" >
            <div className="Reminder-Info">
                <div className="Top-Info">
                    <h3>{props.reminder.name}</h3>
                    <h3>{props.reminder.email}</h3>
                    <h3>date and time</h3>
                    <h3>{props.reminder.title} </h3>
                </div>
                <p>{props.reminder.message}</p>
            </div>
            <button className="ReminderDelete" onClick={onRemove}>-</button>
        </div>
    );
}

export default Reminder
