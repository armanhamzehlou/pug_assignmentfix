var express = require('express');
var path = require('path');

var indexRouter = require(path.join(__dirname ,'/routes/index'));
var userRouter = require(path.join(__dirname ,'/routes/users'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/h2', (req, res) => {
    res.render('index', { title: 'Have a nice day!' })
  });
  
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;
