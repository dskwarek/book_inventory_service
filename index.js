// <copyright file="index" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>

var stockRepository = require('./stockRepository');
var app = require('./app')(stockRepository);

app.listen(process.env.PORT || 3000, function () {
    console.log(' App listening on port 3000');
});