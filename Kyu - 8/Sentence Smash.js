function smash(words) {
    let newWords = "";
    for (let i = 0; i < words.length; i++) {
        i === words.length - 1
            ? (newWords += words[i])
            : (newWords += `${words[i]} `);
    }
    return newWords;
}

console.log(smash(["hello", "world", "this", "is", "great"]));
