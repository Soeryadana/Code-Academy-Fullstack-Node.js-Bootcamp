/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
  if (isNaN(start, end)) {
    return "abc or bca harus dalam angka";
  } else if (end > start) {
    let profit = end - start;
    let total = (profit / start) * 100;
    return "Total kenaikan income " + total + "%";
  } else if (start > end) {
    let loss = start - end;
    let total = (loss / start) * 100;
    return "Total penurunan income -" + Math.ceil(total) + "%";
  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
