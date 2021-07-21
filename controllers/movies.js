const Tickets = require('../models/ticket_model.js');
const fs = require("fs");

module.exports = {
	frontPage: function (req, res){
		const film1 = new Tickets({ name: req.body.name, phone: req.body.phone, email: req.body.email, title: req.body.title, date: req.body.date, time: req.body.time});
  		Tickets.find({}).sort({ 'created_at' : -1}).then(function (tickets) {
      	res.send(tickets);
  		});
  	},

  	thankList: function (req, res){
  		const film1 = new Tickets({ name: req.body.name, phone: req.body.phone, email: req.body.email, title: req.body.title, date: req.body.date, time: req.body.time});
  		console.log(film1)
  		film1.save()
    	
    
  		var errors = []
  		var requiresFields = [
      		'name',
      		'phone',
      		'email',
      		'title',
      		'date',
      		'time'
  		]
  		var data = req.body
  		Object.keys(data).forEach(function(key) {
    		if (data[key].length > 0) {
      			const index = requiresFields.indexOf(key);
      			if (index > -1) {
        			requiresFields.splice(index,1);
      			}
    		}
  		})
  		if (requiresFields.length > 0) {
    		return res.render('index', {errors: requiresFields, data:data})
  		}
 		/*var date = req.body.date
  		const date1 = new Date();
  		const date2 = new Date(date);
  		const diffTime = Math.abs(date2 - date1);
  		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  		console.log(diffTime + " milliseconds");
  		console.log(diffDays + " days");*/
  		res.render('thanks', { title: 'thanks', message: 'Thank you for registration!', data:req.body});
  		fs.appendFileSync("list.txt", req.body.name + " " + req.body.phone + " " + req.body.email + " " + req.body.date+ " " + req.body.title+ " " + req.body.time + "\n");
	},

	viewTicket: function(req, res){
  		console.log(req.body.name)
		Tickets.findOne({_id: req.params.id}, null, {}, function(err, ticket){
	      res.render('view', {data:req.body})
	    })
	    /*Tickets.findOne({}, [], { $orderby : { 'updatedAt' : -1 } }, function(err, post) {
	    	console.log(req.body.name)
  			res.render('view', { tickets: req.body })
		})*/
	},
		

  	deleteTicket: function(req, res){
	    Tickets.deleteMany(req.body.name, {sort: {createdAt: -1}}, function(err){
	        if (err) {
	            console.log(err)
	        }
	        else {
	           return res.render('delete');
	        }
		});    
	},
}