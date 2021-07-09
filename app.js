const express = require('express');
const app = express()
const port = 3010
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');


app.use(bodyParser.urlencoded({extended: true }));

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use(sassMiddleware({
    /* Options */
    src: __dirname,
    dest: path.join(__dirname,'public','css'),
    debug: true,
    outputStyle: 'compressed',
    indentedSyntax: true,
    prefix:  '/css'  // Where prefix is at <link rel="stylesheet" href="prefix/main.css"/>
}));

const { Schema } = mongoose;

const ticketSchema = new Schema({
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
    
 },{ timestamps: { createdAt: 'created_at' }});

const Tickets = mongoose.model('Tickets', ticketSchema);

mongoose.connect('mongodb://localhost:27017/ticket', {useNewUrlParser: true, useUnifiedTopology: true});


var frontPage = function (req, res){
	const film1 = new Tickets({ name: req.body.name, phone: req.body.phone, email: req.body.email, title: req.body.title, date: req.body.date});
	film1.save()
  Tickets.find({}).sort({ 'created_at' : -1}).then(function (tickets) {
      res.send(tickets);
  });  

}

  

var thankList = function (req, res){
  const film1 = new Tickets({ name: req.body.name, phone: req.body.phone, email: req.body.email, title: req.body.title, date: req.body.date});
  console.log(film1)
  film1.save()
    
    
  var errors = []
  var requiresFields = [
      'name',
      'phone',
      'email',
      'title',
      'date'
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
};


app.get('/thanks', frontPage)

app.post('/thanks', thankList)

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

