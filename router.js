var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

const credential = {
    email: "admin@gmail.com",
    password: "admin123"
}

//logging user
router.post('/login',(req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        //res.redirect('/dashboard');
        res.end("Login Successful")
    }else {
        res.end("Invalid Username");
    }
});



module.exports = router;