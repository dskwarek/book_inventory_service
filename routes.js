

module.exports = function(repository) {
    return {
        findAll: function (req, res, next) {
            repository.findAll().then(function (result) {
                res.format({
                    'text/html': function(){
                        res.send('<h1>Hello</h1>');
                    },
                    'application/json': function(){
                        res.json(result);
                    },});
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
                    res.format({
                        'text/html': function(){
                            res.send('<div>Copies left: ' + result + '</div>');
                        },
                        'default': function(){
                            res.json(result);
                        },});
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