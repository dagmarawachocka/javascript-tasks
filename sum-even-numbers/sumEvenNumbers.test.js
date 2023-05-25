// const { sumEvenNumbers } = require('./sumEvenNumbers');
const sumEvenNumbers = require('./sumEvenNumbers');

describe('sumEvenNumbers', () => {
    it('should return the sum of all even numbers', () => {
        expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
    });

    it('should return 0 if there are no even numbers', () => {
        expect(sumEvenNumbers([1, 3, 5, 7, 9])).toBe(0);
    });

    it('should return 0 for an empty array', () => {
        expect(sumEvenNumbers([])).toBe(0);
    });
});