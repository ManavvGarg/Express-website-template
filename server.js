var http = require('http');
var path = require('path');
var express = require('express');
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

console.log('Server Starting.... Please Wait....')
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Done! Server listening at [IP:PORT] = ", addr.address + ":" + addr.port);
});
