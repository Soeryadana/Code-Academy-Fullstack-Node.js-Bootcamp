function isCharsUnique(string){
    let unique = '';

    for (let i = 0; i < string.length; i++) {
        if (unique.includes(string[i]) === true) {
            return false;
        }        
        unique += string[i];
    }
    return true
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false