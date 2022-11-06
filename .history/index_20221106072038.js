/** 
 * Primary file for the API
 * By default, the API listens on port 3000
 * 
 * 
 * 
 * 
 * / */

// Dependencies

const http = require('http');

// The server should respond to all requests with a string

const server = http.createServer(function(req, res) {
    res.end('Hello World\n');
});

// Start the server, and have it listen on port 3000