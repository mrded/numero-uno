var express = require('express');

this.server = express();
this.server.use(express.static('public'));

var port = process.env.PORT || 8080;

this.server.listen(port);
console.log("Express server listening on port %d", port);
