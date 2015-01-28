var express = require('express'),
	bodyParser = require('body-parser'),
	jade = require('jade'),
	stylus = require('stylus'),
	nib = require('nib'),
	port = process.env.PORT || 3000,
	app = express();

function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(stylus.middleware(
  { src: __dirname + '/public',
  compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	var backEndArray = ["C", "C++", "VB.NET", "C#", "Haskell", "ColdFusion", "Golang", "MATLAB Web Server", "Flask", "Django", "Python", "Ruby on Rails", "Node.js", "Express", "Flatiron", "Taco", "Sails", "Java", "PHP", "Perl", "Erlang", "D", "Xhp", "ASP.NET", "Scala", "Smalltalk", "COBOL on Wheelchair", "FORTRAN"]
	var frontEndArray = ["HTML", "AngularJS", "ERB", "HAML", "Jade", "Backbone.js", "Thorax", "Batman", "Meteor", "React", "Flight", "Ember.js", "Knockout", "Singool.js", "Maria", "Rivets.js", "Synapse", "Objective-C", "Swift"]
	var databaseArray = ["PostgreSQL", "MySQL", "MS Access", "Oracle Express", "SQLite", "MSSQL", "NoSQL"]
	var cssThemesArray = ["Bootstrap", "Jumpstart", "Darkstrap", "jQuery Mobile Bootstrap", "SOME KIND OF WORDPRESS SHIT", "CSS3 Microsoft Modern Buttons", "BootMetro", "Cosmo", "Phonegap", "Stylus", "Sass", "LESS"]

	var stack = {
		backEnd: backEndArray[Math.floor(Math.random() * backEndArray.length)].toUpperCase(),
		frontEnd: frontEndArray[Math.floor(Math.random() * frontEndArray.length)].toUpperCase(),
		database: databaseArray[Math.floor(Math.random() * databaseArray.length)].toUpperCase(),
		cssThemes: cssThemesArray[Math.floor(Math.random() * cssThemesArray.length)].toUpperCase()
	}

	res.render('index', stack)
});

app.listen(port);
console.log("Server loaded. The magic happens on port", port)