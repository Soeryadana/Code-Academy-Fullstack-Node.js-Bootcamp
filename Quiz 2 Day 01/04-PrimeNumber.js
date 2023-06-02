function showPrimeNumber(n) {
  let num = '';
  for (let i = 2; i <= n; i++) {
    let prime = isPrime(i);

    if (prime == true) {
      num += i + " ";
    }
  }
  return num;
}

function isPrime(n) {
  let prime = true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }

  return prime;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */
