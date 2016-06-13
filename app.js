var bodyParser = require('body-parser');
var express = require('express');


module.exports = function (repository) {

    var app = express();
    app.use(bodyParser.json());

    app.use(function (req, res, next) {
        console.log('new request at ' + new Date());
        next();
    });

    app.get('/stock', function (req, res, next) {
        repository.findAll().then(function (result) {
            res.json(result);
        }).catch(next);
    });

    app.post('/stock', function (req, res, next) {
        repository.stockUp(req.body.isbn, req.body.count)
            .then(function () {
                res.send(req.body);
            }).catch(next);
    });

    app.get('/stock/:isbn', function (req, res, next) {
        repository.getCount(req.params.isbn).then(function (result) {
            if (result) {
                res.json({count: result});
            } else {
                next();
            }
        }).catch(next);
    });

    app.use(function (req, res, next) {
        var error = new Error('not found');
        error.status = 404;
        next(error);
    });

    app.use(function (err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500).send('Error ' + err.message);
    });

    return app;
}