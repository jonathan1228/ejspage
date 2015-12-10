var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	var sidebarMessage = "You are in the home page!";
	var drinks = [
		{name: "Glenlivet", type: "Scotch"},
		{name: "Jameson", type:"Whiskey"},
		{name: "Jack Daniels", type:"Whiskey"},
		{name: "Grey Goose", type:"Vodka"},
		{name: "AMF", type:"???"},
		{name: "Patron", type:"Tequila"},
		{name: "Fireball", type:"Cinnamon Whiskey"},
		{name: "Captain Morgan", type:"Rum"}
	]
	res.render('pages/index', {
		drinkList: drinks,
		sidebar: sidebarMessage
	});
})
app.get('/about', function(req,res){
	var sidebarMessage = "You are in the about me page!";
	var drinks = [
		{name: "Glenlivet", type: "Scotch"},
		{name: "Jameson", type:"Whiskey"},
		{name: "Jack Daniels", type:"Whiskey"},
		{name: "Grey Goose", type:"Vodka"},
		{name: "AMF", type:"???"},
		{name: "Patron", type:"Tequila"},
		{name: "Fireball", type:"Cinnamon Whiskey"},
		{name: "Captain Morgan", type:"Rum"}
	]
	res.render('pages/about', {
		drinkList: drinks,
		sidebar: sidebarMessage
	});
})

app.get('/pictures', function(req,res){
	var sidebarMessage = "You are in the pictures page!";
	var drinks = [
		{name: "Glenlivet", type: "Scotch"},
		{name: "Jameson", type:"Whiskey"},
		{name: "Jack Daniels", type:"Whiskey"},
		{name: "Grey Goose", type:"Vodka"},
		{name: "AMF", type:"???"},
		{name: "Patron", type:"Tequila"},
		{name: "Fireball", type:"Cinnamon Whiskey"},
		{name: "Captain Morgan", type:"Rum"}
	]
	res.render('pages/pictures', {
		drinkList: drinks,
		sidebar: sidebarMessage
	});
})

app.listen(8080, function(){
	console.log("Listening to port 8080...");
})