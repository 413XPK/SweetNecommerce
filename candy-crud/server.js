var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var logger = require('morgan');
var methodOverride = require('method-override');
const mongoose = require('mongoose')

require('dotenv').config();

var app = express();
require('./config/database')
require('./config/passport');




var indexRouter = require('./routes/index');
var candyRouter = require('./routes/candy-crud');
var prodRouter = require('./routes/products');
var regRouter = require('./routes/register');
// var cartRouter = require('./routes/cart');
var imgRouter = require('./routes/upload');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(session({
  secret: 'CandyCrud!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});


app.use('/', indexRouter);
app.use('/candy-crud', candyRouter);
app.use('/products', prodRouter);
app.use('/register', regRouter);
// app.use('/cart', cartRouter);
app.use('/addimg', imgRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;