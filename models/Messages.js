const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const MessageSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
      },
    message: {
        type: String,
    },
    sender: {
        type: String,
    },
    read: {
        type: Boolean,
        default: false
    }
});


const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;