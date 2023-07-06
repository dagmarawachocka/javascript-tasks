const compareArrays = require("./compareArrays");
const isNewCordLastButOneElement = (visitedPathway, cord) => {
    if (visitedPathway.length > 1) { //musi być jeden element, bo inaczej błąd
        return compareArrays(visitedPathway[visitedPathway.length - 2], cord);
    }
    return false;
};

console.log(isNewCordLastButOneElement([[2,4]], [2,3]));

module.exports = isNewCordLastButOneElement;