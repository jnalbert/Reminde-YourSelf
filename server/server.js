const Reminder = require('./models/reminders')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
var Config = require('config-js');
var config = new Config('./config.js');
const mongoose = require('mongoose')

mongoose.connect(config.get('mongo_uri'), {
  useNewUrlParser: true,
})
const dbMon = mongoose.connection;
dbMon.once('open', function() {
    console.log("Cloud Atlas Connected")
  });
// let reminder = new Reminder({name: 'ryan', email: 'test', reminder_date: Date.now(), title: "test", message: 'test'});

// reminder.save(function (err) {
//     if (err) {
//         console.log(err)
//     };
//     console.log("WE Saved")
//   });

const app = express();
const PORT = 4000;

// middleware for each router
app.use(cors());
app.use(morgan('dev'));
app.use(errorhandler())
app.use(bodyParser.json())

// This is the post to set a reminder
app.post('/setReminder', (req, res, next) => {
    const body = req.body.reminder;
    // console.log(body.name)
    db.query(`INSERT INTO reminders (name, email, date1, time1, title, message)
	VALUES ( ${body.name}, ${body.email}, ${body.date}, ${body.time}, ${body.title}, ${body.message} ) `, (err) => {
        if (err) {
            next(err)
        } else {
            res.sendStatus(201);
        }
            
    })
})

// get all reminder currently set
app.get('/getReminders', (req, res, next) => {
    db.query(`SELECT * FROM reminders`, (err, result) => {
        if (err) {
            next(err)
        } else {
            res.status(200).send({reminders: result})
        }
    })
})

// deletes the rminder passed to it
app.delete('/deleteReminder/:id', (req, res, next) => {
    const id = req.params.id
    db.query(`DELETE FROM reminders WHERE id=${id}`, (err) => {
        if (err) {
            next(err)
        }
    })
    res.sendStatus(204);
})


// get the reminder with the date greater than the current date
app.get('/cronJobReminders', (req, res, next) => {
    db.query("SELECT * FROM reminders.reminders WHERE date1 >= current_date() ORDER BY date1, time1 LIMIT 5", (err, result) => {
        if (err) {
            next(err)
        } else {
            res.status(200).send({reminders: result})
        }
    })
})





app.listen(PORT, () => {
    console.log('The server is listening on port 4000');
})
