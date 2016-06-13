
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('new request at ' + new Date());
    next();
});

app.get('/', function (req,res) {
    res.send('Hello World2');
});

app.post('/stock', function (req,res) {
    console.log(req.body);
    res.send(req.body);
});

app.use(function (req, res, next) {
    var error = new Error('not found');
    error.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(err.status || 500).send('Error ' + err.message);
});

module.exports = app;