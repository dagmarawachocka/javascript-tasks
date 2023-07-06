const findShortestPath = require('./findShortestPath');

describe('findShortestPath', () => {
    const maze = [
        [1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1]
    ];
    const start = [0, 0];
    const end = [4, 4];

    it('should return the shortest path in the maze', () => {
        expect(findShortestPath(maze, start, end)).toEqual([[0, 0], [0, 1], [0, 2], [0, 3], [1, 3], [2, 3], [2, 4], [3, 4], [4, 4]]);
    });

    it('should return null if there is no path', () => {
        const noPathMaze = [
            [1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 0, 1]
        ];
        expect(findShortestPath(noPathMaze, start, end)).toBe(null);
    });
});

// const maze = [
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1],
//     [1, 1, 0, 1, 1],
//     [1, 0, 0, 1, 0],
//     [1, 1, 1, 1, 1]
// ];