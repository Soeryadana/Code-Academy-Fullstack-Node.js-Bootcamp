/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let kabisat = 0;

  for (let i = year1; i <= year2; i++) {
    if (isKabisat(i) === true) {
      kabisat += 1;
    }
  }

  return kabisat;
}

function isKabisat(year) {
  if ((year % 4 == 0 && !(year % 100 == 0)) || year % 4 == 0) {
    return true;
  }
}

console.log(howManyKabisat(1997, 2021));
