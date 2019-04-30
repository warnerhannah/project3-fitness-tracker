const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightSchema = new Schema({
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



const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;