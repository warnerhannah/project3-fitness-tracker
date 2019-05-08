const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightSchema = new Schema({
    userID: {
        type: String,
        // required: true,
        trim: true
    },
    weight: {
        type: Number,
        // required: true,
        trim: true
    }, 
    date: {
        type: String,
        // required: true,
        trim: true
    }
});



const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;