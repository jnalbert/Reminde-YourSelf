import React from 'react'
import './Reminder.css'
import ReminderUtil from '../util/util';

function Reminder(props) {


    const onRemove = (event) => {
        ReminderUtil.deletReminder(props.reminder)
        window.location.reload(true)
    }


    return (
        <div className="Reminder" >
            <div className="Reminder-Info">
                <div className="Top-Info">
                    <h3>{props.reminder.name}</h3>
                    <h3>{props.reminder.email}</h3>
                    <h3>{props.reminder.date1[0]}{props.reminder.date1[1]}{props.reminder.date1[2]}{props.reminder.date1[3]}{props.reminder.date1[4]}{props.reminder.date1[5]}{props.reminder.date1[6]}{props.reminder.date1[7]}{props.reminder.date1[8]}{props.reminder.date1[9]} | {props.reminder.time1[0]}{props.reminder.time1[1]}{props.reminder.time1[2]}{props.reminder.time1[3]}{props.reminder.time1[4]}</h3>
                    <h3>{props.reminder.title} </h3>
                </div>
                <p>{props.reminder.message}</p>
            </div>
            <button className="ReminderDelete" onClick={onRemove}>-</button>
        </div>
    );
}

export default Reminder