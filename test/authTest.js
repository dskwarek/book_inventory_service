// <copyright file="authTest" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>

var assert = require('assert');
var request = require('supertest');
var inMemoryRepository  = require('../inMemoryRepository');
var auth = require('../auth');
var app = require('../app.js')(inMemoryRepository(),auth('darek','test'));

describe('GET /', function () {
    it('access denied', function (done) {
        request(app).
        get('/').
        expect('Access denied').
        expect(401, done);
    })
});