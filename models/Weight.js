const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightSchema = new Schema({
    weight: {
        type: Number
    }
});



const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;