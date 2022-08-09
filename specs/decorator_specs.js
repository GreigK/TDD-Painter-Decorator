const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');


describe('Decorator', function(){
    let decorator;

    this.beforeEach(function(){
        decorator = new Decorator();
    })

    it('should start with an empty paint stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])
    })

    it('should be able to add a can of paint to paint stock', function(){
        const actual = decorator.addPaintStock(1);
        assert.strictEqual(actual, 1);
    });

    xit('should be able to calculate total litres paint it has in stock', function(){
        const paint = new paint(1)
        decorator.addPaintStock(paint)
        const actual = decorator.litresInStock(room)
        assert.strictEqual(actual, true)
    })


})