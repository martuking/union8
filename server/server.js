var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = require('./routes/api');
var app = express();

//  set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://martuking:sara2017@ds123556.mlab.com:23556/union3';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error'));

// view engine setup
app.set('views', path.join(__dirname, '../static'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', api);

app.use('^', function(req, res, next){
  res.render('index');
});

/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('1')
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log('2')
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.send('error', err.status);
});
*/

module.exports = app;
