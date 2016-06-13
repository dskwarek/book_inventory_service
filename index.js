// <copyright file="index" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>

var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log('new request at ' + new Date());
    next();
});

app.use(function (req, res, next) {
    console.log('auth ' + new Date());
    next();
});

var f = function(req,res,next){
    console.log('local ' + new Date());
    next();
};

app.get('/',f,
    function (req,res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log(' App listening on port 3000');
});