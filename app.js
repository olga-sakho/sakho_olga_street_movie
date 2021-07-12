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

mongoose.connect('mongodb://localhost:27017/ticket', {useNewUrlParser: true, useUnifiedTopology: true});

var router = require('./routers/movie_router.js')
router(app)


app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

