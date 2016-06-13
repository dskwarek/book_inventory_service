// <copyright file="index" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>

var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('Hello World');
})

app.listen(3000, function () {
    console.log(' App listening on port 3000');
})