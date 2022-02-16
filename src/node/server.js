var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(`<html><head><script src="node_modules/plotly.js-dist/plotly.js"><script></head><body><div id="plotly"></div></body></html>`); //write a response to the client
  res.end(); //end the response
}).listen(8080); 
