var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');

//var redisHost  = process.env.REDIS_PORT_6379_TCP_ADDR;
//var redisPort  = process.env.REDIS_PORT_6379_TCP_PORT;

//var redis_client = require("redis").createClient(6379,"redis");

// Get our API routes
var api = require('./routes/api');

var app = express();

app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set our api routes
app.use('/', api);

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function (){
    console.log('API running on localhost:' + port);
});
