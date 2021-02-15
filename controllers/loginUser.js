const bcrypt = require('bcrypt')
const User = require('../database/models/User')
 
module.exports = (req, res) => {
    const {
        email,
        password
    } = req.body;
    // try to find the user
    User.findOne({
        email
    }, (error, user) => {
        
        if (user) {
            
            // compare passwords.
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    console.log("lala")
                    req.session.userId = user._id
                    req.session.username = user.username
                    req.session.fname = user.fname
                    req.session.lname = user.lname
                    res.redirect('/')
                } else {
                    console.log("bala")
                    res.redirect('/auth/login')
                }
            })
        } else {
            return res.redirect('/auth/login')
        }
    })
}