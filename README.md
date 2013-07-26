node-devserver
==============

Serve out a local directory with node for development and testing. Proxy page included.

## Install

<pre>
  npm install
</pre>

## Super simple to use

Devserver is designed to be the simple, serves out a dirctory and has a proxy page. Also does directory listing via express.

Configure the proxy url to your desired proxy solution for production, express will mimic the url endpoint.

Put your webapp/files to serve in the 'public' folder, enjoy!

## Run

<pre>
  node server
</pre>

## Sample:
```javascript
var express = require('express');
var proxypage = require('proxypage');

var app = express();

app.set('port', 3000);
app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());
app.use(express.directory('public'));
app.use(express.static('public'));

app.all('/proxy/proxy.ashx', proxypage.proxy); //mimic the .net proxy page

app.listen(app.get('port'), function() {
	console.log('Dev server listening on port ' + app.get('port'));
});

//test: http://localhost:3000/index.html
```