String.prototype.toJadenCase = function () {
    let sentences = this.split(" ");
    let sentenceFixed = "";
    sentences.forEach((sentence, index) => {
        if (sentences.length - 1 === index) {
            sentenceFixed += sentence[0].toUpperCase() + sentence.slice(1);
        } else {
            sentenceFixed +=
                sentence[0].toUpperCase() + sentence.slice(1) + " ";
        }
    });
    return sentenceFixed;
};

// Test Case
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
