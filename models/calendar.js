const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    title: {
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    }
});



const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;