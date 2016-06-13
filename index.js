// <copyright file="index" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>

var http = require('http');
var server = http.createServer(function (reg,res) {
    res.end('hello world');
});
