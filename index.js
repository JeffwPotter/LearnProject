// import the http module
var http = require('http');

// the port that the aspplication will listen on (localhost: 3000)
const PORT=3000;
function handleRequest(request, response) {
  response.end('testing this is the start');
}

//http server instance
var server = http.createServer(handleRequest);

// start the server
server.listen(PORT, function() {
  console.log('LearnProject is listening on http://localhost:%s', PORT)
});
