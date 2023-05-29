const bubbleSort = require('./bubbleSort');

describe('bubbleSort', () => {
    it('should return a sorted array', () => {
        expect(bubbleSort([4, 2, 8, 5, 3])).toEqual([2, 3, 4, 5, 8]);
    });

    it('should return an already sorted array as it is', () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array as it is', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    it('should sort an array with negative numbers', () => {
        expect(bubbleSort([-2, -8, -1, -5])).toEqual([-8, -5, -2, -1]);
    });
});