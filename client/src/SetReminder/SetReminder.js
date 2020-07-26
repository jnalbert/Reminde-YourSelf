
import React, { useState } from 'react';
import './SetReminder.css'
import ReminderUtil from '../util/util';

function SetReminder(props) {
    const [state, setState] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        title: '',
        message: ''
    });


    const handleInputChange = event => {
        setState({...state, [event.target.name]: event.target.value })
    }



    const makeReminder = (data) => {
        // reqXs to make sure data and time are in the correct formate
        const regxDate1 = /\d\d\d\d-\d\d-\d\d/;
        const regxDate2 = /\d\d\d\d-\d-\d\d/;
        const regxDate3 = /\d\d\d\d-\d\d-\d/;
        const regxDate4 = /\d\d\d\d-\d-\d/;

        const regxTime1 = /\d\d:\d\d/;
        const regxTime2 = /\d:\d\d/;
        // checks if all feils are filled in
        if(!data.name || !data.email || !data.date || !data.time || !data.title || !data.message) {
            alert("All feilds must be filled in")
        } else {
            // checks if the data is in the correct formate
            if (regxDate1.test(data.date) || regxDate2.test(data.date) || regxDate3.test(data.date) || regxDate4.test(data.date)) {
                // checks if the time is in the correct formate
                if (regxTime1.test(data.time) || regxTime2.test(data.time)) {
                    // api call
                    ReminderUtil.setReminder(data);

                } else {
                    alert("Time is not in the correct formate")
                }

            } else {
                alert("The data is not in the correct formate")
            }
        }
    }

    const handleSubmit = (event) => {
        makeReminder(state);
        window.location.reload(true)
    }



    return (
        <div className="wrapper">
            <div className="title">
                <h1>Set a Reminder</h1>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input type="text" className="input" placeholder="Name" onChange={handleInputChange} target={"name"} name="name" />
                    <input type="text" className="input" placeholder="Email Address" onChange={handleInputChange} name="dmail" />
                    <input type="text" className="input" placeholder="Date Ex: MM/DD/YYYY" onChange={handleInputChange} name="date" />
                    <input type="text" className="input" placeholder="Time Ex: 5:15 pm" onChange={handleInputChange} name="time" />
                    <input type="text" className="input" placeholder="Title" onChange={handleInputChange} name="title" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message you want to be sent" onChange={handleInputChange} name="message" ></textarea>
                    <div className="btn">
                        <button className="SendButton" onClick={handleSubmit}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetReminder;
