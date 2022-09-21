const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let PicsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        trim: true
    },
    imgUrl: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    })
const Pics = mongoose.model('Pics', PicsSchema)
module.exports = Pics


