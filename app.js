var bodyParser = require('body-parser');
var express = require('express');
var middleware = require('./middleware');

module.exports = function (repository,auth) {

    var app = express();
    var routes = require('./routes')(repository);
    app.use(bodyParser.json());
    app.use(middleware.logRequest);

    app.use(auth);
    app.get('/',routes.hello);
    app.get('/stock',routes.findAll);
    app.post('/stock',routes.stockUp);
    app.get('/stock/:isbn',routes.getCount);

    app.use(middleware.clientError);

    app.use(middleware.serverError);

    return app;
}