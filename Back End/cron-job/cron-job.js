const cron = require('node-cron');
const nodemailer = require('nodemailer');
import transporter from './util'
import mysql from 'mysql';


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


cron.schedule(" * * * * * ", () => {
    let today = new Date();
    let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();

    db.query("SELECT * FROM reminders.reminders WHERE date1 >= current_date() ORDER BY date1, time1", (err, results) => {
        if (err) {
            throw err;
        } else (
            console.log(results)
        )
    })

    if (myDate === date && myTime === time) {
        console.log("---------------");
        console.log("The message is being sent");
        let mailOptions = {
            from: "reminder.buddy879@gmail.com",
            to: "jnalbert879@gmail.com",
            subject: "Test",
            test: "Hi there this is a test"
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                throw err;
            } else {
                console.log("this email was sent sucsesfully");
                console.log(info);
            }
        })
    } else {
        console.log("It is not time yet");
    }
})