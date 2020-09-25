const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const todoRouter = require('./routes/todo');
const dashboardRouter = require('./routes/dashboard');

const app = express();

app.use(express.static("public"));//reference to our public files

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/js',  express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect JS bootstrap
app.use('/jquery',  express.static(__dirname + '/node_modules/jquery/dist')); //redirects to jquery
app.use('/bootstrap-social', express.static(__dirname + '/node_modules/bootstrap-social'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome'));


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/todo', todoRouter);
app.use('/dashboard', dashboardRouter);

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
