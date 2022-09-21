
const bcrypt = require('bcryptjs');
const jwtGenerator = require('../utils/jwtGenerator');
const User = require("../models/UserSchema");


module.exports = {
  register: async function (req, res) {
    const { name,
      lastName,
      password,
      confirmPassword,
      cardType,
      cardNumber,
      phoneNumber,
      expiration,
      email } = req.body;
      
    // console.log(req.body)

    if (password != confirmPassword) {
      return res.json({ msg: "Passwords do not match" });
    }

    try {
      User.findOne({ email: email }).then(async (user) => {
        if (user) return res.json({ msg: "User already exists" });
        else {
          console.log(user)

          const saltRound = 10;
          const salt = await bcrypt.genSalt(saltRound);

          const bcryptPassword = await bcrypt.hash(password, salt);

          const newUser = new User({
            name,
            lastName,
            password: bcryptPassword,
            cardType,
            cardNumber,
            phoneNumber,
            expiration,
            email
          });

          // console.log(newUser)
          
          const token = jwtGenerator(newUser._id);

          // console.log(token)
          // ** saving the user and sending back the token **
          newUser.save()
          res.json({ token });
        }
      })
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500)
    }
  },




  login: async function (req, res) {
    console.log(req.body)
    try {
      let { email, password, name, lastName } = req.body;


      //check if user dosen't exist
      User.findOne({ email: email })
        .then(async user => {
          if (!user) return res.json({ msg: 'User does not exist', status: 401, id: 'Login_Failed' });


          console.log(user)

          if (user.length === 0) {
            return res.json({ msg: "email is not correct", status: 401, id: 'Login_Failed' });
          };

          console.log(user.password)
          //check if input password is whats in db
          const validPassword = await bcrypt.compare(password, user.password);
          console.log('compare password', validPassword)
          if (!validPassword) {
            return res.json({
              msg: 'Password, or Email is incorrect',
              status: 401, id: 'Login_Failed'
            });
          }

          //generate our jwt token
          const token = jwtGenerator(user._id);
          console.log('token', token)

          // ****** sending back the token *********
          res.json({ token });
        })
    } catch (err) {
      console.error(err.message);
      res.sendStatus(500).send('Server Error');
    };
  }


}
