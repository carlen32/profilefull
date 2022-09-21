const router = require('express').Router();
const authController = require('../controllers/authController')

// ********** Register User ***************
router.route('/register').post(authController.register)

// ********** Login User ***************
router.route('/login').post(authController.login)


module.exports = router;