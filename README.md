node-devserver
==============

Serve out a local directory with node for development and testing. Proxy page included.

## Install

```
  npm install
```

## Super simple to use

Devserver is designed to be the simple, serves out a dirctory and has a proxy page. Also does directory listing via express.

Configure the proxy url to your desired proxy solution for production, express will mimic the url endpoint.

Include the folder to serve as an argument or put your webapp/files to serve in the 'public' folder.

## Running
To server a specific folder (you may need to sudo):
```
  node server.js ../ConfigurableViewerJSAPI/viewer/
```
Or the default public folder:
```
node server.js
```

## Sample:
```javascript
var express = require('express');
var proxypage = require('proxypage');

var app = express();

app.set('port', 3000);
app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());

//get folder path to server from command line args, if not present use relative folder called public:
var wwwRoot = 'public';
if (process.argv[2]) {
	wwwRoot = process.argv[2];
}

// mimic an .aspx proxy page:
app.all('/proxy/proxy.ashx', proxypage.proxy);
app.use(express.directory(wwwRoot));
app.use(express.static(wwwRoot));

app.listen(app.get('port'), function() {
	console.log('Dev server listening on port ' + app.get('port'));
});
```