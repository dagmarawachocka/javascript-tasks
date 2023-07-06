const compareArrays = require("./compareArrays")

const isCordLastElement = (visitedPathway, cord) => {
    if (visitedPathway.length > 0) {
        return compareArrays(visitedPathway[visitedPathway.length - 1], cord);
    }
    return false;
};


console.log(isCordLastElement([[4,4]], [4,4]));



module.exports = isCordLastElement;
