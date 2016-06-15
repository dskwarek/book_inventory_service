

var stockRepository = require('./StockRepository');
var auth = require('./auth');
var app = require('./app')(stockRepository,auth('darek','test'));


app.listen(process.env.PORT || 3000, function () {
    console.log(' App listening on port 3000');
});