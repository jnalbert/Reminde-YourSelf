const cron = require('node-cron');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const axios = require('axios');
const { response } = require('express');



// db conection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Spike108523",
    database: "reminders"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

// mail transporter
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "reminder.buddy879@gmail.com",
        pass: "PASSWORD879"
    }
})

// makes the date readable
const goodDate = (date) => {
    const gooddate = date[0]+date[1]+date[2]+date[3]+date[4]+date[5]+date[6]+date[7]+date[8]+date[9];  
    return gooddate;       
}

//makes the time readable
const goodTime = (time) => {
    const goodtime = time[0]+time[1]+time[2]+time[3]+time[4];
    return goodtime
}


// begining of the cron scheduler
cron.schedule(" * * * * * ", () => {
    console.log('---------------')
    console.log('---------------')
    console.log("cron is running")


    // add zers to single didget moths and times
    let today = new Date();
    let zeroMonth;
    let zeroDate;
    let zeroHour;
    let zeroMinite;

    if ((today.getMonth() + 1) < 10) {
        zeroMonth = '0' + (today.getMonth() + 1);
    } else {
        zeroMonth = today.getMonth();
    }

    if (today.getDate() < 10) {
        zeroDate = '0' + today.getDate();
    } else {
        zeroDate = today.getDate();
    }

    if (today.getHours() < 10) {
    zeroHour = '0' + today.getHours()
    } else {
    zeroHour = today.getHours();
    }

    if (today.getMinutes() < 10) {
    zeroMinite = '0' + today.getMinutes();
    } else {
        zeroMinite = today.getMinutes()
    }

    let date = today.getFullYear() + '-' + zeroMonth + '-' + zeroDate
    let time = zeroHour + ":" + zeroMinite;
    // end of time

    // api to query the db
    axios.get('http://localhost:4000/cronJobReminders')
    .then(response => {
        const reminders = response.data.reminders
        // forEach reiminder
        if (reminders) {
            reminders.forEach(rem => {
                const date1 = goodDate(rem.date1)
                const time1 = goodTime(rem.time1)

                // checks if the date and time are the same as now
                if (date1 === date && time1 === time) {
                    console.log('-----------------')
                    console.log("message is being sent")

                    // set up maill options for node mailer
                    let mailOptions = {
                        from: "reminder.buddy879@gmail.com",
                        to: `${rem.email}`,
                        subject: `${rem.title}`,
                        text: `Hello ${rem.name} you have a reminder with a 
                    message: ${rem.message}`
                    }
                    // send the eamil
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            throw err;
                        } else {
                            console.log("this email was sent sucsesfully");
                            console.log(info);
                            
                            // after the email is sent the reminder is deleted
                            axios.delete(`http://localhost:4000/deleteReminder/${rem.id}`)
                            console.log('reminder was deleted')
                        }
                    })
                } else {
                    console.log('not yet')
                }
            })
        };
    })
})