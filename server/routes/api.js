const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const post = require('../models/userInfoAdmin');
const builderInfoModel = require('../models/builderInfo');


const db = "mongodb://localhost:27017/auction";

mongoose.Promise = global.Promise;
mongoose.connect(db,function(err) {
    if (err) {
        console.log(err);
    }
})




module.exports = router;

