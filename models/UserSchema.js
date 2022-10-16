const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Pics = require("./PicSchema");


let UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
    })
  
const User = mongoose.model('User', UserSchema)
module.exports = User
