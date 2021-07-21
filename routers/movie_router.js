const controller = require('../controllers/movies.js');
const Tickets = require('../models/ticket_model.js');
module.exports = function(app) {

	app.get('/view', controller.frontPage);

	app.post('/tickets', controller.thankList);

	app.get('/view/:id', controller.viewTicket);

	app.post('/view', controller.viewTicket);

	app.get('/', function (req, res) {
  		res.render('index');
	});
	app.post('/delete', controller.deleteTicket); 

	app.get('/rules_and_conditions', function (req, res) {
  		res.render('rules_and_conditions');
	});

}