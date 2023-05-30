const generateFibonacci = require('./generateFibonacci');

describe('generateFibonacci', () => {
    it('should generate the first n Fibonacci numbers', () => {
        expect(generateFibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    it('should return an array with 0 and 1 for n = 2', () => {
        expect(generateFibonacci(2)).toEqual([0, 1]);
    });

    it('should return an array with only 0 for n = 1', () => {
        expect(generateFibonacci(1)).toEqual([0]);
    });

    it('should return an empty array for n = 0', () => {
        expect(generateFibonacci(0)).toEqual([]);
    });
});