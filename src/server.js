// Creates Server, gets server to listen and links to heroku

// https://github.com/sofer/sssk/blob/master/server.js

var http = require("http");
var router = require("./router");
var port = process.env.PORT || 4000;
var app = function(req, res) {
  router(req, res);
};
http.createServer(app).listen(port);
console.log("server listening on port", port);
