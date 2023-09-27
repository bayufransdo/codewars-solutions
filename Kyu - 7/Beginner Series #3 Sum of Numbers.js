function getSum(a, b) {
    let start = (a < b) ? a : b;
    let end = (a > b) ? a : b;
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(2,4));