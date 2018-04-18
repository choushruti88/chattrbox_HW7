var http = require("http");
var fs = require("fs");
//var path = require("path");
var extract = require("./extract");
var ws = require("./websockets-server");
var mime = require("mime");

var handleError = function(err, res) {
  fs.readFile("app/error.html", function(err, data) {
    res.end(data);
  });
};

var server = http.createServer(function(req, res) {
  console.log("Responding to a request.");
  /* var url = req.url; */

  /* var fileName = "index.html";
  if (url.length > 1) {
    fileName = url.substring(1);
  } */
  /* res.end("<h1>Hello, World!! </h1>");  */
  /* console.log(fileName);
  var filePath = path.resolve(__dirname, "app", fileName); */

  var filePath = extract(req.url);

  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      //res.setHeader("Content-Type", "text/html");
      res.setHeader("Content-Type", mime.getType(filePath));
      console.log(mime.getType(filePath));
      res.end(data);
    }
  });
});
server.listen(3000);
