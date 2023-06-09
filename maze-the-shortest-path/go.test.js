const go = require('./go');

describe('go', () => {
    const cord = [0,0];

    const pathwayId = 0;

    it('should return the shortest path', () => {
        expect(go(cord, pathwayId)).toEqual([
            [
                [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [2, 3], [3, 3], [4, 3], [4, 4]
            ],
            [
                [0, 0], [1, 0], [2, 0], [2, 1]
            ],
            [
                [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
            ]
        ]);
    });
});

// const maze = [
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1],
//     [1, 1, 0, 1, 1],
//     [1, 0, 0, 1, 0],
//     [1, 1, 1, 1, 1]
// ];