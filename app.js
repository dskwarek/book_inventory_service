
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/myproject';

app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('new request at ' + new Date());
    next();
});

app.get('/', function (req,res) {
    MongoClient.connect(url, function(err, db) {
        db.collection('books').find({}).toArray( function (err,result) {
            res.json(result);
            db.close();
        });
    });
});

app.post('/stock', function (req,res) {
    MongoClient.connect(url, function(err, db) {
        db.collection('books').updateOne({isbn: req.body.isbn}, {
            isbn: req.body.isbn,
            count: req.body.count
        }, {upsert: true});
        db.close();
    });
    res.send('Hello World');
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