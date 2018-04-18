var path = require("path");

var extractFilePath = function(url) {
  var filePath;
  var fileName = "index.html";

  //var fileName = "test-files/textFile.txt";
  //var fileName = "test-files/file.pdf";
  //var fileName = "test-files/videoplay.mp4";
  //var fileName = "test-files/smile.mp3";

  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log("The fileName is: " + fileName);

  filePath = path.resolve(__dirname, "app", fileName);
  return filePath;
};

module.exports = extractFilePath;
