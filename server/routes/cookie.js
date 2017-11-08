const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

const session = require('express-session');
const moment = require('moment');
// const userAgent = require('express-useragent');

const guestSession = require('../models/guestSession');

const db = "mongodb://localhost:27017/codepost";


// const db = "mongodb://public:post12321@ds163181.mlab.com:63181/codepost";


router.get('/info', function (req, res) {
	console.log('Checking for Cookie');
	// let source = req.headers['user-agent'],
  // ua = userAgent.parse(source);
	if(typeof req.session.bId === 'undefined'){
		let now = moment().format('MMMM Do YYYY, h:mm:ss a');
		let newGuestSession = new guestSession();
		newGuestSession.momentTime = now;
		newGuestSession.save(function(err,addedSession){
			if(err){ console.log("Error in saving Session"); }
			else{
				res.json(addedSession);
				let bId = addedSession._id;
				console.log("New Browser ID Generated: " +bId);
				req.session.bId = bId;
				req.session.save(function(err) {
					if(err) console.log(err);
				});
			}
		})
	}else{
		console.log("bId Exists! : " +req.session.bId);
		req.params.id = req.session.bId;
		guestSession.findById(req.params.id)
			.exec(function(err,guestSession){
				if(err){
					console.log(err);
				}else{
					res.json(guestSession);
					console.log(guestSession);
				}
			});
	}
});

module.exports = router;
