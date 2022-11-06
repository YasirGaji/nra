/** 
 * Primary file for the API
 * By default, the API listens on port 3000
 * 
 * 
 * 
 * 
 * / */

// Dependencies

let http = require('http');
let url = require('url');

// The server should respond to all requests with a string
const server = http.createServer(function(req, res) {
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);

  // get the path
  const path = parsedUrl.pathname; //untrimmed path
  const trimmedPath = path.replace(/^\/+|\/+$/g, ''); //trimmed path

  // get http method
  const method = req.method.toLowerCase();

  // send the response
  res.end('Hello World\n');

  // log the request path
  console.log('Request received on path: ' + trimmedPath + ' with method: ' + method);

});

  
// Start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log('The server is listening on port 3000 now');
});