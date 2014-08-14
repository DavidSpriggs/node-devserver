// Dev Server with proxy page by David Spriggs

var express = require('express');
var proxypage = require('proxypage');

var app = express();

app.set('port', process.argv[3] || 3000);
app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());

//get folder path to server from command line args, if not present use relative folder called public:
var wwwRoot = 'public';
if (process.argv[2]) {
	wwwRoot = process.argv[2];
}

//mimic an .aspx proxy page:
app.all('/proxy/proxy.ashx', proxypage.proxy);
app.use(express.directory(wwwRoot));
app.use(express.static(wwwRoot));

app.listen(app.get('port'), function() {
	console.log('Dev server listening on port ' + app.get('port'));
});