const assert = require('assert');
const Rectangle = require('../Rectangle.js');

describe('Rectangle', () => {
    
    it('is a square so TRUE', () => {
        const rectangle = new Rectangle(10, 10);
        assert.strictEqual(rectangle.isSquare(), true);
    });

    it('is not a square so FALSE', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.isSquare(), false);
    });

    it('gives the area', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.getArea(), 50);
    });

    it('gives the perimeter', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.getPerimeter(), 30);
    });
});
