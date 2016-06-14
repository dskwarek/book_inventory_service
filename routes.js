

module.exports = function(repository) {
    return {
        findAll: function (req, res, next) {
            repository.findAll().then(function (result) {
                res.json(result);
            }).catch(next);
        }
        ,
        stockUp: function (req, res, next) {
            repository.stockUp(req.body.isbn, req.body.count)
                .then(function () {
                    res.send(req.body);
                }).catch(next);
        }
        ,
        getCount: function (req, res, next) {
            repository.getCount(req.params.isbn).then(function (result) {
                if (result) {
                    res.json({count: result});
                } else {
                    next();
                }
            }).catch(next);
        },
        hello: function (req,res,next) {
            res.send('New Hello World from ' + process.env.NODE_ENV);
        }
    }
}