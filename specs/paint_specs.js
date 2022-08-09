const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
    let paint;

    this.beforeEach(function(){
        paint = new Paint(10)
    })

    it('should have a number of litres of paint', function(){
        const actual = paint.litre
        assert.strictEqual(actual, 10);
    });

    it('should be able to check if it is empty', function(){
        const actual = paint.isCanEmpty();
        assert.strictEqual(actual, false)
    });

    it('should be able to empty itself of paint', function(){
        const actual = paint.checkIfEmpty();
        assert.strictEqual(actual, 0)
    });
})
