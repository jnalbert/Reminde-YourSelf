
import React, {useState} from 'react'
import './SetReminder.css'

function SetReminder(props) {
    return (
        <div className="wrapper">
            <div className="title">
                <h1>Set a Reminder</h1>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input type="text" className="input" placeholder="Name" />
                    <input type="text" className="input" placeholder="Email Address" />
                    <input type="text" className="input" placeholder="Date YOU MUST USE YYYY-MM-DD" />
                    <input type="text" className="input" placeholder="Time YOU MUST USE 1:35 pm = 13:35" />
                    <input type="text" className="input" placeholder="Title" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message you want to be sent"></textarea>
                    <div className="btn">
                        <button className="SendButton">send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetReminder;
