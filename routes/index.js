var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let name = ''
	res.render('index'¨,{
      title: 'Programacion 2,2023-1',
      name: name,
	});
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	let name = req.body.name;
	let email = req.body.email;
	let comment = req.body.comment;
	let ip = req.ip;

	console.log({name, email, comment, ip});



	res.redirect('/');
	
});


module.exports = router;
