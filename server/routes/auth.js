const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const http = require('http');

var bodyParser = require("body-parser");

const userAdminModel = require('../models/userInfoAdmin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));




router.post("/userData",function(req,res) {
    
    if (req.body.userName == 'shoyeb' && req.body.passWord == '123') {
        req.session.adminLoginStatus = true;
        var xyz = req.session.adminLoginStatus
        res.json(xyz);
    } else {
        req.session.destroy();
    }
    

    var userModel = new userAdminModel()
        userModel.username = req.body.userName;
        userModel.password = req.body.passWord;
    
    // userModel.save(function(err,save) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(save);
    //     }

    // })

})

module.exports = router;