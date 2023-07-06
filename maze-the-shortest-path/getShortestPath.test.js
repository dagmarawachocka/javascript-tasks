const getShortestPath = require('./getShortestPath');

describe('getShortestPath', () => {
    const paths = [
        [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [2, 3], [3, 3], [4, 3], [4, 4]],
        [[0, 0], [1, 0], [2, 0], [2, 1]],
        [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]]
    ];

    const end = [4, 4];

    it('should return the shortest path', () => {
        expect(getShortestPath(paths, end)).toEqual([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]]);
    });
});