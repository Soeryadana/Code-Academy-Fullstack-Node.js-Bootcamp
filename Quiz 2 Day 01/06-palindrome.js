function isPalindrome(word) {
  let wordLower = word.toLowerCase();
  let len = wordLower.length;

  for (let i = 0; i / 2 < len; i++) {
    if (wordLower[i] !== wordLower[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("kasur ini rUsak")); //true
