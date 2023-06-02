function maxWordLength(params) {
    let splitWord = params.split(" ");
    splitWord = splitWord.sort(function(a, b){
        return b.length - a.length;
    });
    return splitWord[0];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp