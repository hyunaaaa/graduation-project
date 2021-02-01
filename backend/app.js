require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var coronadailyRouter = require('./routes/dailyAPI'); //라우터 추가
var newsRouter = require('./routes/newsAPI');
var coronalocalRouter = require('./routes/localAPI');
var coronaageRouter = require('./routes/ageAPI');
var coronalocalageRouter = require('./routes/localageAPI');

var app = express();

var corsOptions={
  origin: 'http://localhost:3000',
  credentials: true,
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json());

//app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
//Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

//Connect to Mongodb server
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
  .then(()=>console.log('mongodb connect ok'))
  .catch(e => console.error(e));


app.use('/coronadaily', coronadailyRouter);
app.use('/news', newsRouter);
app.use('/coronalocal', coronalocalRouter);
app.use('/coronaage', coronaageRouter);
app.use('/localage',coronalocalageRouter);

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
