const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//var redisHost  = process.env.REDIS_PORT_6379_TCP_ADDR;
//var redisPort  = process.env.REDIS_PORT_6379_TCP_PORT;

//var redis_client = require("redis").createClient(6379,"redis");

// Get our API routes
const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
app.use('/', api);

/**
 * Get port from environment and store in Express.
  */
  const port = process.env.PORT || '3000';
  app.set('port', port);

  /**
   * Create HTTP server.
    */
    const server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
      */
      server.listen(port, () => console.log(`API running on localhost:${port}`));
