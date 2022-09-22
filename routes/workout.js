const router = require('express').Router();
const workoutController = require('../controllers/workoutController')

// ********** post workout ***************
router.route('/').post(workoutController.postWorkOut)



module.exports = router;