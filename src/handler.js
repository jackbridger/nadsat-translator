// Functions that do something. We call within our router.js e.g. take us to a page, link our CSS page

// https://github.com/sofer/sssk/blob/master/handlers.js

const handlers = (module.exports = {});
const data = require("./model");
const fs = require("fs");
const path = require("path");
const url = require('url');
const autocomplete = require('./autocomplete')

let headers = {
  "content-type": "text/html"
};

handlers.home = function(req, res) {
  const filePath = path.join(__dirname + "/.." + "/public" + "/index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.write("Sorry! Problem at our end.");
      return;
    }
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(file);
  });
};

handlers.notFound = function(req, res) {
  res.writeHead(404, headers);
  res.end("Resource not found");
};

handlers.translate = (req, res) => {
  let searchWord = req.url.split('?')[1];
  let wordTranslation = data.nadsat[searchWord];
  const filePath = path.join(__dirname + "/.." + "/public" + "/index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.write("Sorry! Problem at our end.");
      return;
    }
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end(wordTranslation);
  });
}


handlers.autocomplete = (req, res) => {
  let partialWord = req.url.split('?')[1];
  let autcompleteResults = autocomplete(partialWord);
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end(autcompleteResults);
}

handlers.public = (req, res) => {
  const extension = req.url.split(".")[1];

  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript"
  };

  const filePath = path.join(__dirname + "/.." + req.url);
  console.log("i am in my public handler", filePath);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.write("Ooops! Problem on our end.");
      return;
    } else {
      console.log(extensionType[extension]);
    res.writeHead(200, { "Content-Type" : extensionType[extension]});
    res.end(file);
  };
});
}
