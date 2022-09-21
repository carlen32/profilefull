const router = require('express').Router();
const imgVidController = require('../controllers/img&videos')

// ********** get photos to buy  ***************
router.route('/photos').get(imgVidController.getImgs)

// ********** Buy the photo  ***************
router.route('/buyImg').post(imgVidController.buyImg)

// ********** get photos to buy  ***************
router.route('/bought').get(imgVidController.getAllBoughtImgs)


module.exports = router;