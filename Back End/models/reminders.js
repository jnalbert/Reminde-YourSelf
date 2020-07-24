var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var reminderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    reminder_date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
  }, {
    timestamps: true
  });

const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;
