var http = require('http');
var timeUtils = require('./TimeUtils.js')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`Hello World! Current Time is: ${timeUtils.getCurrentTime()}` );
}).listen(8080);