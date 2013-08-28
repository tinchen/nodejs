var server = require("./http_server");
var router = require("./router");

var handlers = {
  "/"       : require("./handlers/start"),
  "/start"  : require("./handlers/start"),
  "/upload" : require("./handlers/upload"),
  "/show"   : require("./handlers/show")
};

server.start(router, handlers);