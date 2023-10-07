function addBinary(a, b) {
    let sum = a + b;
    let binary = "";
    while (true) {
        let divide = Math.floor(sum / 2);
        if (divide == 1) {
            binary = (sum % 2) + binary;
            binary = divide + binary;
            break;
        }
        binary = (sum % 2) + binary;
        sum = divide;
    }
    return binary;
}
console.log(addBinary(5, 9));
