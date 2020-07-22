const axios = require('axios');

const baseURL = 'http://localhost:4000'


const ReminderUtil = {
    setReminder(data) {
        axios.post(`${baseURL}/setReminder`, {
            reminder: {
                name: `'${data.name}'`,
                email: `'${data.email}'`,
                date: `'${data.date}'`,
                time: `'${data.time}'`,
                title: `'${data.title}'`,
                message: `'${data.message}'`
            }
        })
    },

    getReminders() {
        axios.get(`${baseURL}/getReminders`)
        .then(response => {
            return response.data.reminders
        })
    },


    deletReminder(elID) {
        const id = elID.id
        console.log(id);
        axios.delete(`${baseURL}/deleteReminder/${id}`) 
    }
}




export default ReminderUtil



