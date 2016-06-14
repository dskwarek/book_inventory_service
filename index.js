

var stockRepository = require('./StockRepository');
var app = require('./app')(stockRepository);

app.listen(process.env.PORT || 3000, function () {
    console.log(' App listening on port 3000');
});