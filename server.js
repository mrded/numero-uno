var express = require('express');

this.server = express();
this.server.use(express.static(__dirname + '/dist'));
this.server.set('view engine', 'ejs');

this.server.listen(process.env.PORT || 8080, function() {
  console.log("Express server listening on port %d", process.env.PORT || 8080);
});

this.server.get('*', function(req, res) {
  res.render('index', require('./dist/assets.json'));
});
