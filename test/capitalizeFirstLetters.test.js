const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters.js');

describe('capitalizeFirstLetter', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms javaScript correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
    });

    it('works with one character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });

    it('transforms all first letters of the sentence', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });
});




