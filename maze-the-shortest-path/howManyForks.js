function howManyForks(previousCord, cord, maze) {
    let n = 0;
    let forks = 0;
    while (n <= 3) {
        const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
        const newCord = cord.map(
            (element, elementIndex) => element + directions[n][elementIndex]
        );
        if (
            maze[newCord[0]] &&
            maze[newCord[0]][newCord[1]] === 1
        ) {
            forks++;
        }
        n++;
    }

    if (
        previousCord !== undefined
    ) {
        forks = forks - 1;
    }

    return forks;
}

module.exports = howManyForks;