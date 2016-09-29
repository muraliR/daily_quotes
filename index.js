var express = require('express');
var app = express();
var expressHandlebars  = require('express-handlebars');
var request = require('request');

app.get('/', function(req, res) {
	request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand', function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
	  		response_body = JSON.parse(response.body);
	    	res.render('home',{ quoteData : response_body[0] });
	  	}
	})
});

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(process.env.PORT || 5000, function () {
	console.log("Listening on port 5001...");
});