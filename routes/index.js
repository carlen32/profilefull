
const router = require('express').Router();
const User = require('./auth');
const secure = require('./secure');
const imgVideos = require('./img&Videos');
const workout = require('./workout')

//**** Middleware for routes *******
const validInfo = require('../middleware/validInfo');
// middleware check if user info is good
const authorization = require('../middleware/authorization');


// *** Register/Login *** 
router.use('/user', validInfo, User)


// *** Secure routes/ token required ***
router.use('/secure', authorization, secure)

// *** Secure routes/ getting data to buy img/videos ***
router.use('/buy', authorization, imgVideos)

// *** workout ***
router.use('/workout', workout)


module.exports = router;