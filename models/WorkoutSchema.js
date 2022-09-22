const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WorkoutSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
    }, {timestamps: true})
  
const Workout = mongoose.model('Workout', WorkoutSchema)
module.exports = Workout