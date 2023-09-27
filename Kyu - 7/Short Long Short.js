function solution(a, b) {
    return a > b ? (a + b + a).toString() : (b + a + b).toString();
}

console.log(solution("False", "U"));