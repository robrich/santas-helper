'use strict';

var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname));

var port = process.env.PORT || 3000;
server.listen(port, function () {
	console.log('Listening on '+port);
});
