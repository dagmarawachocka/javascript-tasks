const compareArrays = require("./compareArrays");

const isExistInArray = (currentPathway, cord) => {
    for (let i = 0; i < currentPathway.length; i++) {
        if (compareArrays(currentPathway[i], cord)) {
            return true;
        }
    }
    return false;
}

console.log(isExistInArray(
    [
        [0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3],[2,4],[2,3]
    ], [0, 0]
));

module.exports = isExistInArray;