

module.exports =  {
    logRequest: function (req, res, next) {
        console.log('new request at ' + new Date());
        next();
    },
    clientError: function (req, res, next) {
        var error = new Error('not found');
        error.status = 404;
        next(error);
    },
    serverError: function (err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500).send('Error ' + err.message);
    }
};