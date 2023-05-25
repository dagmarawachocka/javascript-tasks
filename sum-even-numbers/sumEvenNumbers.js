function sumEvenNumbers(arr) {
        return arr.reduce((total, element) => element % 2 === 0 ? total + element : total + 0, 0);
}

module.exports = sumEvenNumbers;