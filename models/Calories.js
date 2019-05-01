const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caloriesSchema = new Schema({
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



const Calories = mongoose.model('Calories', caloriesSchema);

module.exports = Calories;