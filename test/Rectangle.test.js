const assert = require('assert');
const Rectangle = require('../Rectangle.js');
const {} = require('../Rectangle.js');

describe('Rectangle', () => {
    
    it('is a square so TRUE', () => {
        const rectangle = new Rectangle(10, 10);
        assert.strictEqual(isSquare(), true);
    });

    it('is not a square so FALSE', () => {
        assert.noStrictEqual(isSquare(), false);
    });

    it('gives the area', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });

    it('gives the perimeter', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});
