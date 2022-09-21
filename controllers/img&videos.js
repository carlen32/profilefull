
const imgData = require("../data/imgData.json");
const bcrypt = require('bcryptjs');
const User = require("../models/UserSchema");
const Pics = require("../models/PicSchema");

module.exports = {

    getImgs: function (req, res) {
        // console.log('grabPhoto', imgData)
        res.status(200).send(imgData)
    },

    getAllBoughtImgs:  function (req, res) {
        console.log(req.user, 'boughtImages');
       User.findOne({ _id: req.user })
       .then(async user => {
        //   console.log(user.email)
          const email = user.email
        Pics.find({ email: email }).then(async (pics) => {
            console.log(pics)
            if (pics) return res.json({ pics });
            else {
                res.json("err")
            }

        })
       })
    },

    buyImg: async function (req, res) {

      
        try {
            let { email, password, id, name, imgUrl, description, price } = req.body;


            //check if user dosen't exist
            User.findOne({ email: email })
                .then(async user => {
                    if (!user) return res.json({ msg: 'User does not exist', status: 401, id: 'Buy_Failed' });

                    if (user.length === 0) {
                        return res.json({ msg: "email is not correct", status: 401, id: 'Buy_Failed' });
                    };

                    // console.log(user.password)
                    //check if input password is whats in db
                    const validPassword = await bcrypt.compare(password, user.password);
                    console.log('compare password', validPassword)
                    if (!validPassword) {
                        return res.json({
                            msg: 'Password is incorrect',
                            status: 401, id: 'Buy_Failed'
                        });
                    }
                    Pics.findOne({ id: id }).then(async (pic) => {
                        if (pic) return res.json({ msg: "You Already Bought This Pic Guy", status: 401, id: 'Buy_Failed' });
                        else {
                            const newPic = new Pics({
                                name,
                                email,
                                id,
                                price,
                                description,
                                imgUrl
                            });
                            // ** saving the Pic  **
                            await newPic.save()

                            Pics.find({ email: email }).then(async (pics) => {
                                console.log(pics)
                                if (pics) return res.json({ pics });
                                else {
                                    res.json("err")
                                }

                            })
                        }
                    })

                })



        } catch (err) {
            console.error(err.message);
            res.sendStatus(500).send('Server Error');
        };
    }
};


