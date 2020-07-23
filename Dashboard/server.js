// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// for static files like css
app.use("/static", express.static(__dirname + "/static"));


// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index_main');
});

// about page 
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

app.listen(8080);
console.log('8080 is the magic port');