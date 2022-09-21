module.exports = (req, res, next) => {
    const {email, name, password, phoneNumber, cardNumber, cardType, expiration, confirmPassword } = req.body;
//   console.log(req.body)

    const validEmail = (userEmail) => {
        // console.log(userEmail)
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
        // return true
    };
 

    if (req.path === '/register') {
        if (![email, name, password, phoneNumber, cardNumber, cardType, expiration, confirmPassword].every(Boolean)) {
     
            return res.json({msg:'Missing Credentials', status: 401, id: 'Verify_Failed'});
        } else if (!validEmail(email)) {
            return res.json({msg: 'Invalid Email', status: 401, id: 'Verify_Failed'});
        }
    } else if (req.path === '/login') {
        if (![email, password].every(Boolean)) {
           return res.json({msg:'Missing Credentials', status: 401, id: 'Verify_Failed'}); 
        } else if (!validEmail(email)) {
            return res.json({msg: 'Invalid Email', status: 401, id: 'Verify_Failed'});
        }
    }
    next();
};