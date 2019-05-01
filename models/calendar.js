const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }
});



const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;