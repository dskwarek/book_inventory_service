// <copyright file="auth" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>

var auth = require('basic-auth');

module.exports = function(username, password) {
    return function(req, res, next) {
        var credentials = auth(req);
        if (credentials && credentials.name === username && credentials.pass === password) {
            next();
        } else {
            res.setHeader('WWW-Authenticate', 'Basic realm=book inventory access');
            res.status(401).send('Access denied');
        }
    };
};