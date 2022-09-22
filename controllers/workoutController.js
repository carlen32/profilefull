const Workouts = require("../models/WorkoutSchema");

module.exports = {
    postWorkOut: async function (req, res) {
       const{title, load, reps} = req.body

       try {
        const workout = await Workouts.create({title,load,reps})
        res.status(200).json(workout)
       } catch (error) {
        res.status(400).json({error: error.message})
       }
    }
};