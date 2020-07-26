
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
        message: '',
        validationError: '',
    });


    const handleInputChange = event => {
        setState({...state, [event.target.name]: event.target.value })
    }



    const formValidation = (data) => {
        // reqXs to make sure data and time are in the correct formate
        const regxDate1 = /\d\d-\d\d-\d\d\d\d/
        const regxDate2 = /\d\d-\d-\d\d\d\d/;
        const regxDate3 = /\d-\d\d-\d\d\d\d/;
        const regxDate4 = /\d-\d-\d\d\d\d/;

        const regxTime1 = /\d\d:\d\d pm/;
        const regxTime4 = /\d\d:\d\d am/;
        const regxTime2 = /\d:\d\d pm/;
        const regxTime3 = /\d:\d\d am/;
        // checks if all feilds are filled in
        if(!data.name || !data.email || !data.date || !data.time || !data.title || !data.message) {
            setState({...state, validationError: "* All fields must be filled in"})
            return false
        } else {
            // checks if the data is in the correct formate
            if (regxDate1.test(data.date) || regxDate2.test(data.date) || regxDate3.test(data.date) || regxDate4.test(data.date)) {
                // checks if the time is in the correct formate
                if (regxTime1.test(data.time) || regxTime2.test(data.time) || regxTime3.test(data.time) || regxTime4.test(data.time)) {
                    // set the validation state to null of all is formated correct
                    setState({...state, validationError: ''})
                    return true

                } else {
                    setState({...state, validationError: "* Time is not in the correct format"})
                    return false
                }

            } else {
                setState({...state, validationError: "* Date is not in the correct format"})
                return false
            }
        }
    }

    const handleSubmit = (event) => {
        const validation = formValidation(state);
        if (validation) {
            ReminderUtil.setReminder(state)
            window.location.reload(true)
        }
        
    }



    return (
        <div className="wrapper">
            <div className="title">
                <h1>Set a Reminder</h1>
    <div className="validation">{state.validationError}</div>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input type="text" className="input" placeholder="Name" onChange={handleInputChange} target={"name"} name="name" />
                    <input type="text" className="input" placeholder="Email Address" onChange={handleInputChange} name="email" />
                    <input type="text" className="input" placeholder="Date Ex: MM-DD-YYYY" onChange={handleInputChange} name="date" />
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
