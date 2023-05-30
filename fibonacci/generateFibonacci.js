function generateFibonacci(n) {
    let arr = [0, 1];
    for(let i = 0; i < n - 2; i++){
        arr.push(arr[i] + arr[i + 1]);
    }
    arr.length = n;
    return arr;
}

module.exports = generateFibonacci;

