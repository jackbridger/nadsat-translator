// Functions that do something. We call within our router.js e.g. take us to a page, link our CSS page

// https://github.com/sofer/sssk/blob/master/handlers.js

const handlers = (module.exports = {});
const data = require("./model");
const fs = require("fs");
const path = require("path");

let headers = {
  "content-type": "text/html"
};

handlers.home = function(req, res) {
  const filePath = path.join(__dirname + "/.." + "/public" + "/index.html")
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.write("Sorry! Problem at our end.");
      return;
    }
    res.writeHead(200, {
      "Content-Type":"text/html"
    });
    res.end(file);
  });
};

handlers.notFound = function(req, res) {
  res.writeHead(404, headers);
  res.end("Resource not found");
};
