var express = require('express');
var router = express.Router();

router.get(‘/placelist', function(req, res, next) {
	var db = req.db;
	db.collection(‘placelist').find().toArray(function(err,items){
		res.json(items);
	});
});

module.exports = router;