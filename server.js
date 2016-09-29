// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request');
require('console-stamp')(console, 'yyyy.mm.dd HH:MM:ss');


// Configure Express
var app = express();
var server = http.createServer(app);
app.enable('trust proxy'); // Trust "X-Forwarded-For"
app.use(bodyParser.json());

// Serve the static files
app.use('/', express.static(__dirname + '/public'));

// Proxy API requests
app.post('/api/*', function(req, res) {
    console.log('Handling api request: ' + req.url);
    request.post({
        url: 'https://api.cxense.com/' + req.path.replace(/^\/api\//, ''),
        headers: {'X-cXense-Authentication': req.header('X-cXense-Authentication') || ''},
        body: req.body || {},
        json: true
    }).pipe(res);
});

// Start server
var listenPort = 10511;
app.listen(listenPort);
console.log('Listening on port ' + listenPort);
