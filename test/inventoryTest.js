// <copyright file="inventoryTest" company="Motorola Solutions, Inc.">
//   Copyright (C) 2016 Motorola Solutions, Inc.
// </copyright>
var assert = require('assert');

describe('Math in js', function () {
    it('should support addition',function (done) {
        setTimeout(function () {
            assert.equal(1 + 1,2);
            done();
        },1000);
    });
});