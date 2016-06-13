// <copyright file="inventoryTest" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>
var assert = require('assert');
var sum = require('../sum');
var app = require('../app');
var request = require('supertest');

describe('Math in js', function () {
    it('should support addition',function (done) {
        setTimeout(function () {
            assert.equal(sum(1,1),2);
            done();
        },500);
    });
});


describe('GET /',function () {
   it('should render hello word',function () {
       request(app)
           .get('/')
           .expect('Hello World2')
           .expect(200)
           .end(function(err, res) {
               if (err) throw err;
           });
   }) ;
});

describe('POST /',function () {
    it('should send echo',function (done) {
        request(app)
            .post('/stock')
            .send({
                isbn: '12334',
                count: '5'
            })
            .expect('Content-Type',/json/)
            .expect(200, {
                isbn: '12334',
                count: '5'
            }, done);
    }) ;
});