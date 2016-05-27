var express = require('express');
 var app = express();
 //routes

app.set('view engine', 'ejs');


//routing to home page req - means request to a server and res - means response from the server
 app.get('/', function(req, res) {
 	res.render('home');
 });

//this is single page 
 app.get('/star_wars_episode/:episode_number?', function(req, res) {
var episode_number = req.params.episode_number;
 res.send("<h3>This is the page for episode </h3>" + episode_number);
 });

 app.get('*', function(req, res) {
res.send("<h2>Error 404 - this page is not available on this site.</h2>")
 });

 app.listen(3000, function() {
 	console.log("this application is running on localhost 3000")
 });