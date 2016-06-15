
var repo1 = {
    isbn: '',
    count: '',
    body: {},
    stockUp: function (isbn, count) {
        this.isbn = isbn;
        this.count = count;
        return Promise.resolve();
    }
};


var repo2 = {
    stockUp: function (isbn, count) {
        return Promise.reject();
    }
};

var assert = require('assert');

describe('routes',function () {
    it('should stock up book',function (done) {

        var roures = require('../routes')(repo1);
        var req = {
            body: {
                isbn: '123',
                count: '4'
            }
        };

        var res = {
            send: function (data) {
                assert.equal(repo1.isbn,'123');
                assert.equal(repo1.count,'4');
                done();
            }
        };

        var next = function () {
        };

        roures.stockUp(req,res,next);

    });

    it('should stock execute next',function (done) {

        var roures = require('../routes')(repo2);
        var req = {
            body: {
                isbn: '123',
                count: '4'
            }
        };

        var res = {};

        var next = function () {
           done();
        };

        roures.stockUp(req,res,next);

    });
});


