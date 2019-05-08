const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caloriesSchema = new Schema({
    userID: {
        type: String,
        // required: true,
        trim: true
    },
    consumed: {
        type: Number
    },
    burned: {
        type: Number
    },
    date: {
        type: String
    }
});



const Calories = mongoose.model('Calories', caloriesSchema);

module.exports = Calories;