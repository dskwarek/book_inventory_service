
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myproject';


var p = MongoClient.connect(url).then(function(db) {
    return db.collection('books');
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('new request at ' + new Date());
    next();
});

app.get('/stock', function (req,res) {
    p.then(function (collection) {
        return collection.find({}).toArray().then(function (result) {
            res.json(result);
        })
    });
});

app.post('/stock', function (req,res,next) {
    p.then(function (collection) {
        return collection.updateOne({isbn: req.body.isbn}, {
            isbn: req.body.isbn,
            count: req.body.count
        }, {upsert: true}).then(function () {
            res.send('Hello World');
        });
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