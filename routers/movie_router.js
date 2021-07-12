const controller = require('../controllers/movies.js');
module.exports = function(app) {

	app.get('/list', controller.frontPage);

	app.post('/tickets', controller.thankList);

	app.get('/', function (req, res) {
  		res.render('index');
	});

	app.get('/tickets', function (req, res) {
  		res.render('index');
	});

	app.get('/rules_and_conditions', function (req, res) {
  		res.render('rules_and_conditions');
	});


}