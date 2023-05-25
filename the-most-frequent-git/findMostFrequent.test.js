const findMostFrequent = require('./findMostFrequent');

describe('findMostFrequent', () => {
    it('should return the number that appears the most frequently', () => {
        expect(findMostFrequent([1, 2, 3, 2, 2, 3, 1, 3, 3])).toBe(3);
    });

    it('should return the first number if multiple numbers appear the same amount of times', () => {
        expect(findMostFrequent([1, 1, 2, 2, 3, 3])).toBe(1);
    });

    it('should return null for an empty array', () => {
        expect(findMostFrequent([])).toBe(null);
    });
});
