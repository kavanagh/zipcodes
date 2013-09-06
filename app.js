
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , zip = require('./routes/zip')
  , http = require('http')
  , path = require('path');

var app = express();

// initialize the zip data.
zip.init();


app.configure('development', function () {
  app.use(express.logger('dev'));
});

app.configure('production', function () {
  app.use(express.logger());
});

app.configure(function () {

  // Response is so small at the moment that gzipping makes it bigger
  //app.use(express.compress());

  app.set('port', process.env.PORT || 3000);
  app.set('trust proxy', true);
  app.disable('x-powered-by');
  app.use(express.favicon());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/v1/zip/:zip', zip.get);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});
