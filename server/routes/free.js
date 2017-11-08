const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const session = require('express-session');
const moment = require('moment');

const guestSession = require('../models/guestSession');

const db = "mongodb://localhost:27017/codepost";

router.post('/basic', function (req, res) {
	var newGuestSession = new guestSession();
	newGuestSession._id = req.session.bId;
	newGuestSession.basicInfo.ageValue = req.body.ageValue;
	newGuestSession.basicInfo.maritalValue = req.body.maritalValue;
	newGuestSession.basicInfo.dependantValue = req.body.dependantValue;
	newGuestSession.basicStatus = 1;

	guestSession.findOneAndUpdate({_id: req.session.bId}, newGuestSession)
		.exec(function (err, newGuestSession) {
		if (err) {
			console.log(err);
			res.json("error");
		} else {
			basic = "true";
			req.session.basic = basic;
			console.log(req.session.basic);
			res.json("success");
		}
	});
});

router.get('/basic/:id', function(req,res){
	console.log("Finding and Getting ID Data");
	guestSession.findById(req.params.id)
		.exec(function(err,guestSession){
			if(err) console.log("Error getting Basic Info");
			res.json(guestSession);
		})
})

router.get('/getbasic', function(req,res){
	guestSession.findById(req.session.bId)
		.exec(function(err,guestSession){
			if(err) console.log(err);
			res.json(guestSession);
		})
})

module.exports = router;
