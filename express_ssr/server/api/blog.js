import { Router } from 'express'

const router = Router();
let Article = require('../models/Article');
let responseData;
let moment = require('moment');

router.use(function(req, res, next) {
	responseData = {
		code: 0,
		message: ''
	}
	next();
})
router.get('/blog', function(req, res, next) {
	var page = req.query.page;
	var rows = 4;
	var count = 0;
	Article.find({}, function(err, allDoc) {
		if(allDoc.length % 4 == 0) {
			count = allDoc.length / 4;
		} else {
			count = parseInt(allDoc.length / 4) + 1;
		}
	}).then(function() {
		Article.find({}).skip((page - 1) * rows).limit(rows).exec(function(err, info) {
			if(err) {
				responseData.code = 0;
				responseData.message = 'error';
				res.send(responseData)
			} else {
				responseData.code = 1;
				responseData.message = 'success';
				responseData.article = info;
				responseData.total = count;
				res.send(responseData)
			}
		})
	})
})

router.get('/PV', function(req, res, next) {
	Article.find({}, function(err, allDoc) {
		responseData.code = 1;
		responseData.message = 'success';
		responseData.article = allDoc;
		res.send(responseData)
	})
})
router.get('/setPV', function(req, res, next) {
	let title = req.query.title;
	Article.findOne({
		_id: title
	}).then(function(info) {
		console.log(info)
		if(!info) return;
		info.PV++;
		let updates = {
			$set: {
				PV: info.PV
			}
		};
		Article.update({
			_id: title
		}, updates, function(err) {
			if(err) return;
			responseData.code = 1;
			responseData.message = 'success';
			res.send(responseData)
		})
	})
})
export default router