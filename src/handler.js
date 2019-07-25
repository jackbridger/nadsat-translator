// Functions that do something. We call within our router.js e.g. take us to a page, link our CSS page

// https://github.com/sofer/sssk/blob/master/handlers.js

// var handlers = (module.exports = {});
// var data = require("./model");
//
// var headers = {
//   "content-type": "text/html"
// };
//
// handlers.home = function(req, res) {
//   res.writeHead(200, headers);
//   res.end(data.greeting);
// };
//
// handlers.notFound = function(req, res) {
//   res.writeHead(404, headers);
//   res.end("Resource not found");
// };

// autocomplete section
// user types into text box; on each key press, search dictionary object and return possible words
// (add event listener etc.)
var inputString = "test";
var testObject = { tested: "1", testing: "2", no: "3" };
var returnedWords = [];

function pushKeys(key) {
  var keyString = key.toString();
  if (keyString.includes(inputString)) {
    returnedWords.push(key);
  }
}

Object.keys(testObject).forEach(pushKeys);

console.log(returnedWords);
// display possible words
