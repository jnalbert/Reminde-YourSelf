
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
        nameError: 'Name',
        dmailError: 'Email Address',
        dateError: 'Date MUST USE YYYY-MM-DD',
        timeError: 'Time MUST USE 1:35 pm = 13:35',
        titleError: 'Title',
        messageError: 'Message you want to be sent'        
    });


    const handleChangeName = event => {
        setState({...state, name: event.target.value })
    }
    const handleChangeEmail = event => {
        setState({...state, email: event.target.value })
    }
    const handleChangeDate = event => {
        setState({...state, date: event.target.value })
    }
    const handleChangeTime = event => {
        setState({...state, time: event.target.value })
    }
    const handleChangeTitle = event => {
        setState({...state, title: event.target.value })
    }
    const handleChangeMessage = event => { 
        setState({...state, message: event.target.value })
    }


    const validation = () => {
        let nameError
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
            if (!data.name) {
                return
            }
            if (!data.email) {
                setState({...state, placeholderEmail: 'this feild is required'})
            }
            if (!data.date) {
                setState({...state, placeholderDate: "this feild is required"})
            }
            if (!data.time) {
                setState({...state, placeholderTime: "this feild is required"})
            } 
            if (!data.title) {
                setState({...state, placeholderTitle: "this feild is required"})
            }
            if (!data.message) {
                setState({...state, placeholderMessage: "this feild is required"})
            }

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
                setState({...state, placeholderDate: "the formate is incorrect"})
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
                    <input type="text" className="input" placeholder='Name' onChange={handleChangeName} target={"name"}/>
                    <div></div>
                    <input type="text" className="input" placeholder='Email Address' onChange={handleChangeEmail}/>
                    
                    <input type="text" className="input" placeholder='Date MUST USE YYYY-MM-DD' onChange={handleChangeDate}/>
                    <input type="text" className="input" placeholder='Time MUST USE 1:35 pm = 13:35' onChange={handleChangeTime}/>
                    <input type="text" className="input" placeholder='Title' onChange={handleChangeTitle}/>
                </div>
                <div className="msg">
                    <textarea placeholder='Message you want to be sent' onChange={handleChangeMessage}></textarea>
                    <div className="btn">
                        <button className="SendButton" onClick={handleSubmit}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetReminder;
