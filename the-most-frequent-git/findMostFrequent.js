function findMostFrequent(arr) {
    if (arr.length === 0) {
        return null;
    }

    const objectFromArray = {};

    arr.forEach(element => {
        objectFromArray[element] = (objectFromArray[element] || 0) + 1;
    });

    return Object.keys(objectFromArray).reduce(function(a, b) {
        if ((objectFromArray[a] > objectFromArray[b]) || (objectFromArray[a] === objectFromArray[b])) {
            return parseFloat(a);
        } else {
            return parseFloat(b);
        }
    })
}
console.log(findMostFrequent([1, 2, 2]));

module.exports = findMostFrequent;