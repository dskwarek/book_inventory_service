var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myproject';

var p = MongoClient.connect(url, {
    db: { bufferMaxEntries: 0 }
}).then(function(db) {
    return db.collection('books');
}).catch(function (err) {
    console.log(err);
    process.exit(1);
});

var repository = function createStockRepository() {
    return {
        findAll: function () {
            return p.then(function (collection) {
                return collection.find({}).toArray();
            });
        },
        stockUp: function (isbn, count) {
            return p.then(function (collection) {
                return collection.updateOne({isbn: isbn}, {
                    isbn: isbn,
                    count: count
                }, {upsert: true});
            });
        }
    }
};

module.exports = repository;