module.exports = function (handlers, pathname, response, request) {
  console.log("Start to route a request for " + pathname);

  if (typeof handlers[pathname] === 'function') {
    console.log("A request handler found for " + pathname);
    handlers[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}