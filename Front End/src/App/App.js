import React, { useState } from 'react';
import './App.css';
import SetReminder from '../SetReminder/SetReminder.js';
import RemindersList from '../RemindersList/RemindersList.js';


function App(props) {
  const [state, setState] = useState({
    reminders: [{
      id: 1,
      name: 'Justin Albert 1',
      email: "jnalbert879@gmail.com",
      date: '2020/7/19',
      time: '13:35',
      title: "reminder",
      message: "this is a test is should work 1"},
      {
      id: 2,
      name: 'Justin Albert 2',
      email: "jnalbert879@gmail.com",
      date: '2020/7/19',
      time: '13:35',
      title: "reminder",
      message: "this is a test is should work 2"},
      {
      id: 3,
      name: 'Justin Albert 3',
      email: "jnalbert879@gmail.com",
      date: '2020/7/19',
      time: '13:35',
      title: "reminder",
      message: "this is a test is should work 3"},
      {
      id: 4,
      name: 'Justin Albert 4',
      email: "jnalbert879@gmail.com",
      date: '2020/7/19',
      time: '13:35',
      title: "reminder",
      message: "this is a test is should work 3"}

    ]
  });
 


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

    </div>
  );
}


export default App;
