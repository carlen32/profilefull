const User = require("../models/UserSchema");

module.exports = {
    verify: async function (req, res) {
        console.log('verify')
        try {
            res.json(true);
        } catch (err) {
            console.error(err.message);
            res.sendStatus(500).send('Server Error');
        };
    },

    getUser: async function (req, res) {
        // console.log(req.user)
        
        try {
            User.findOne({ _id: req.user }).then(async (user) => {
                    console.log(user)
                 await   res.json({ user })
            })
        } catch (error) {
            console.error(error.message);
            res.sendStatus(500)
        }
    }

}