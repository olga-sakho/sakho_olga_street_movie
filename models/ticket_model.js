const mongoose = require('mongoose');

//const { Schema } = mongoose;

		const ticketSchema = new mongoose.Schema({
   			name:  {
    			type: String,
   			}, 
   			phone:  {
    			type: Number,
   			},
    		email:  {
    			type: String,
   			},
   			title:  {
    			type: String,
   			},
   			date: {
    			type: Date,
   			},
   			time: {
    			type: String,
   			},
    
 			},{ timestamps: { createdAt: 'created_at' }});

const Tickets = mongoose.model('Tickets', ticketSchema);
module.exports = Tickets