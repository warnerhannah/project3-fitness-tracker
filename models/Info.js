const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const InfoSchema = new Schema({
    
});


const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;