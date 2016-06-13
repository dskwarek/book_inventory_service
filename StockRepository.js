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

module.exports  = {
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
    },
    getCount: function (isbn) {
        return p.then(function (collection) {
            return collection.find({"isbn": isbn}).limit(1).next();
        }).then(function (result) {
            if (result) {
                return result.count;
            } else {
                return null;
            }
        });
    }
}