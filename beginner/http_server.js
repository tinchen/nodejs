var http = require("http");
var url = require("url");

function start(router, handlers) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    router(handlers, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started on http://localhost:8888");
}

exports.start = start;
