const axios = require('axios');

const baseURL = 'http://localhost:4000'


const Reminder = {
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
    }

}




module.exports = Reminder



