const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const builderInfoModel = require('../models/builderInfo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));




router.post('/builderDetails',function(req,res){ 
      
    var builderModel = new builderInfoModel()
     
    var _id = Math.floor(1000000 + Math.random() * 9000); 

    builderModel._id = _id,
    builderModel.groupName = req.body.groupName,
    builderModel.companyName = req.body.companyName,
    builderModel.partner = req.body.partner,
    builderModel.companyAdd = req.body.companyAdd,
    builderModel.gst = req.body.gst,
    builderModel.pan = req.body.pan,
    builderModel.tin = req.body.tin,
    builderModel.email = req.body.email,
    builderModel.website = req.body.website,
    builderModel.companyPersonName = req.body.companyPersonName,
    builderModel.contactPersonName = req.body.contactPersonName,
    builderModel.userName = req.body.userName,
    builderModel.password = req.body.password

    builderModel.save(function(err,save) {
        if (err) {
            console.log(err);
        } else {
            console.log(save);
        }

    })
     
     

    console.log(builderModel.groupName);
  

})

module.exports = router;

