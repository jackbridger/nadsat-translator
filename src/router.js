// Instructs where to go to find different paths

// https://github.com/sofer/sssk/blob/master/router.js

var handlers = require("./handler");

var routes = {
  "/": handlers.home,
  "404": handlers.notFound,
  "translate": handlers.translate,
  "autocomplete":handlers.autocomplete,
  "public":handlers.public
};

// /translate#q=good

module.exports = function(req, res) {
  if (routes[req.url]) {
    routes[req.url](req, res);
  }
  else if (req.url.includes('translate')) {
    routes["translate"](req, res);
  }
  else if (req.url.includes("autocomplete")) {
    routes["autocomplete"](req,res);
  }
  else if (req.url.includes('public')) {
    console.log("i am in public!")
      routes["public"](req, res);
  }
  else {
    routes[404](req, res);
  }
};
