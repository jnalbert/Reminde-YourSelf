const axios = require('axios');

const baseURL = '/api'
// const TestURL = 'http://localhost:4000'

const ReminderUtil = {

    setReminder (data) {
        const timeUTC = new Date(`${data.date} ${data.time}`)
        axios.post(`${baseURL}/setReminder`, {
            reminder: {
                name: data.name,
                email: data.email,
                date: timeUTC,
                title: data.title,
                message: data.message
            }
            
        })
        
    },


    getReminders() {
        axios.get(`${baseURL}/getReminders`)
        .then(response => {
            return {reminders: response.data.reminders}
            })
    },


    deletReminder(elID) {
        const id = elID._id
        console.log(id);
        axios.delete(`${baseURL}/deleteReminder/${id}`) 
    }
    }








export default ReminderUtil



