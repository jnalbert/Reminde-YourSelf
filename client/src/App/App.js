import React, { useState, useEffect } from 'react';
import './App.css';
import SetReminder from '../SetReminder/SetReminder.js';
import RemindersList from '../RemindersList/RemindersList.js';
import axios from 'axios'

function App(props) {
  const [state, setState] = useState({reminders: []});
 

 
  const getReminder = () => {axios.get('/api/getReminders')
  .then(response => {
    setState({reminders: response.data.reminders})
  })
}

  
 useEffect(() => {
   getReminder()
 }, [])



  return (
    <div>
      <h1 className="heading">Remind YourSelf</h1>
      <div className="App">
        <div className="SetReminder">
          <SetReminder  />
        </div>
        <div className="RemindersList">
          <RemindersList reminders={state.reminders}/>
        </div>
      </div>
      <div className="footer">
        <p>Created By Justin Albert</p>
        <p>© ® all rights reserved</p>
      </div>
    </div>
  );
}


export default App;
