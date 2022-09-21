const express = require('express');
const router = express.Router();
const secure = require('../controllers/secureController')
 

// *** Verify *****
router.route('/verify')
.get(secure.verify)

// *** Get The User ****
router.route('/getUser')
.get(secure.getUser)


module.exports = router;