// Dev Server with proxy by David Spriggs

var express = require('express');
var proxypage = require('proxypage');

var app = express();

app.set('port', 3000);
app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());
app.use(express.directory('public'));
app.use(express.static('public'));

app.all('/proxy/proxy.ashx', proxypage.proxy);

app.listen(app.get('port'), function() {
	console.log('Dev server listening on port ' + app.get('port'));
});