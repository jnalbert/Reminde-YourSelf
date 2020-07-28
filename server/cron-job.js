const cron = require('node-cron');
const nodemailer = require('nodemailer');
const axios = require('axios');
const Config = require('config-js');


const config = new Config('./config.js');

// mail transporter
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "reminder.buddy879@gmail.com",
        pass: config.get('email_pass')
    }
})

console.log("Cron Job Started")


// begining of the cron scheduler
// cron.schedule(" * * * * * ", () => {
    console.log('---------------')
    console.log("cron is running")


    // formats time
    let dateBad = new Date();
    let miuns = dateBad.setSeconds(0, 0)
    const today = new Date(miuns)
    console.log(dateBad.toLocaleString());
   

    // api to query the db
    axios.get('http://localhost:4000/cronJobReminders')
    .then(response => {

        const reminders = response.data.reminders

        // forEach reiminder
        if (reminders) {
            reminders.forEach(rem => {

                // foramsts date from reminder
                const date = rem.reminder_date
                const rem_date = new Date(date)


                // checks if the date and time are the same as now
                if (rem_date.getTime() === today.getTime()) {
                    console.log('-----------------')
                    console.log("message is being sent")

                    // set up maill options for node mailer
                    let mailOptions = {
                        from: "reminder.buddy879@gmail.com",
                        to: `${rem.email}`,
                        subject: `${rem.title}`,
                        text: `Hello ${rem.name} you have a reminder with a message 
${rem.message}`
                    }
                    // send the eamil
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            throw err;
                        } else {
                            console.log("this email was sent sucsesfully");
                            console.log(info);
                            
                            // after the email is sent the reminder is deleted
                            axios.delete(`http://localhost:4000/deleteReminder/${rem._id}`)
                            console.log('reminder was deleted')
                        }
                    })
                } else {
                    console.log('not yet')
                }
            })
        };
    })
// })