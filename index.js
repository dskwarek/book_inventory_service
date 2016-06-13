// <copyright file="index" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>

var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log('new request at ' + new Date());
    next();
});

app.get('/', function (req,res) {
    throw new Error('Something bad happened');
    res.send('Hello World2');
});

app.use(function (err, req, res, next) {
    console.log('Error 1');
    res.status(500);
});

app.listen(3000, function () {
    console.log(' App listening on port 3000');
});