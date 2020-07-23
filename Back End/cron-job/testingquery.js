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


const goodDate = (date) => {
    const gooddate = date[0]+date[1]+date[2]+date[3]+date[4]+date[5]+date[6]+date[7]+date[8]+date[9];  
    return gooddate;       
}

const goodTime = (time) => {
    const goodtime = time[0]+time[1]+time[2]+time[3]+time[4];
    return goodtime
}


// time
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
    // console.log(response.data.reminders)
    const reminders = response.data.reminders
    // console.log(reminders.length)
    reminders.forEach(rem => {
        const date1 = goodDate(rem.date1)
        // console.log(date1)
        const time1 = goodTime(rem.time1)
        // console.log(time1)
        if (date1 === date && time1 === time) {
            console.log('-----------------')
            console.log("message is being sent")
            // let mailOptions = {
            //     from: "reminder.buddy879@gmail.com",
            //     to: "jnalbert879@gmail.com",
            //     subject: "Test",
            //     test: "Hi there this is a test"
            // }
            // transporter.sendMail(mailOptions, (err, info) => {
            //     if (err) {
            //         throw err;
            //     } else {
            //         console.log("this email was sent sucsesfully");
            //         console.log(info);
            //     }
            // })
        } else {
            console.log('not yet')
        }
    });
})