const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const http = require('http');

var bodyParser = require("body-parser");

const userAdminModel = require('../models/userInfoAdmin');

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());

router.post("/userData",function(req,res) {
    let username = req.body.userName;
    let password = req.body.passWord;
    
    console.log(username +" "+password);

    var userModel = new userAdminModel()
        userModel.username = req.body.userName;
        userModel.password = req.body.passWord;
    
    userModel.save(function(err,save) {
        if (err) {
            console.log(err);
        } else {
            console.log(save);
        }
    })
})

module.exports = router;