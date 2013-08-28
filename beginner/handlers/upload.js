var fs = require("fs"),
    multiparty = require("multiparty");

module.exports = function(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new multiparty.Form();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "/tmp/test.png");
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.write("成功上傳圖片：<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}