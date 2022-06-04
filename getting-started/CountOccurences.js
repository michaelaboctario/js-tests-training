function countOccurences(wordsArray) {
    const count = {};
    wordsArray.forEach((word) => {
        count[word] = count[word] + 1 || 1 ;
    });
    return count;
}

module.exports = countOccurences;