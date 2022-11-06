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

// class URL {
//   constructor(pathname, query) {
//     this.pathname = pathname;
//     this.query = query;
//   }
// }

// The server should respond to all requests with a string
const server = http.createServer(function(req, res) {
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  //const parsedUrl = new URL(req.url);

  // get the path  
  const path = parsedUrl.pathname; //untrimmed path
  const trimmedPath = path.replace(/^\/+|\/+$/g, ''); //trimmed path

  // get the query string as an object
  let queryStringObject = parsedUrl.query;

  // get http method
  const method = req.method.toLowerCase();

  // get the headers as an object
  const headers = req.headers;

  // send the response
  res.end('Hello World\n');

  // log the request path
  console.log('Request received on path: ' + trimmedPath + ' with method: ' + method + ' and with these query string parameters: ', queryStringObject + ' and with these headers: ', headers);

  console.log(parsedUrl);

});

  
// Start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log('The server is listening on port 3000 now');
});