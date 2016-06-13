
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var factory = require('./StockRepository');
var repository = factory();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('new request at ' + new Date());
    next();
});

app.get('/stock', function (req,res, next) {
    repository.findAll().then(function (result) {
            res.json(result);
    }).catch(next);
});

app.post('/stock', function (req,res,next) {
    repository.stockUp(req.body.isbn,req.body.count)
        .then(function () {
            res.send('Hello World');
        }).catch(next);
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