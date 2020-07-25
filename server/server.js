const Reminder = require('./models/reminders')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
var Config = require('config-js');
var config = new Config('./config.js');
const mongoose = require('mongoose')


// conect to monggose db
mongoose.connect(config.get('mongo_uri'), {
  useNewUrlParser: true,
})
const dbMon = mongoose.connection;
dbMon.once('open', function() {
    console.log("Cloud Atlas Connected")
  });

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
    const timeUTC = new Date(`${body.date} ${body.time}`)

    const reminder = new Reminder({name: body.name, email: body.email, reminder_date: timeUTC, title: body.title, message: body.message})

    reminder.save((err) => {
        if (err) {
            next(err)
        } else {
            console.log("it saved!")
            res.sendStatus(201)
        }
    })

})

// get all reminder currently set
app.get('/getReminders', (req, res, next) => {

    Reminder.find({is_deleted: false}, (err, results) => {
        if (err) {
            next(err)
        } else {
            res.status(200).send({reminders: results})
        }
    })

})

// deletes the rminder passed to it
app.delete('/deleteReminder/:id', (req, res, next) => {
    const id = req.params.id

    Reminder.findOneAndUpdate({_id: id}, {is_deleted: true}, (err) => {
        if (err) {
            next(err)
        } else {
            res.sendStatus(204);
        }
    })


})


// get the reminder with the date greater than the current date
app.get('/cronJobReminders', (req, res, next) => {

    Reminder.find({is_deleted: false})


    // db.query("SELECT * FROM reminders.reminders WHERE date1 >= current_date() ORDER BY date1, time1 LIMIT 5", (err, result) => {
    //     if (err) {
    //         next(err)
    //     } else {
    //         res.status(200).send({reminders: result})
    //     }
    // })
})





app.listen(PORT, () => {
    console.log('The server is listening on port 4000');
})
