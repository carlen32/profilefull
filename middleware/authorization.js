const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    
    // console.log(req.header("token"))
    try {
       
        const jwtToken = req.header("token");//getting token form header
      
        if (!jwtToken) {
            return res.status(403).json({msg:'Not Authorized', status: 403, id: 'Auth_Failed'})
        };
        
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);
        console.log(payload, 'authorized')
        //req.user payload can be used with our routes
        req.user = payload.user;
        
        next();
    } catch (err) {
        console.error(err.message);
        return res.status(403).json({msg:'Not Authorized', status: 404, id: 'Auth_Failed'})
    }
};