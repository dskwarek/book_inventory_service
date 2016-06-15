// <copyright file="inventoryTest" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>
var assert = require('assert');
var sum = require('../sum');
var request = require('supertest');
var inMemoryRepository  = require('../inMemoryRepository');
var app = require('../app.js')(inMemoryRepository(), function(req, res, next) {
    next();
});

describe('Math in js', function () {
    it('should support addition',function (done) {
        setTimeout(function () {
            assert.equal(sum(1,1),2);
            done();
        },500);
    });
});


describe('POST /',function () {
    it('should send echo',function (done) {
        request(app)
            .post('/stock')
            .send({
                isbn: '12334',
                count: '5'
            })
            .expect(200, {
                isbn: '12334',
                count: '5'
            }, done);
    }) ;
});



describe('Book inventory', function () {
    it('allows to stock up the items', function (done) {
        request(app).
        post('/stock').
        send({isbn: '1234', count: 10}).
        expect('Content-Type', /json/).
        expect(200, {isbn: '1234', count: 10}, done);
    })
});