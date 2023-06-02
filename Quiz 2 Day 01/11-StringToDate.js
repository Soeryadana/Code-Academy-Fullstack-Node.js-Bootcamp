/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/; // Date format: DD/MM/YYYY
    if (!regex.test(s)) {
      return s + " bad format date"; // Invalid format
    }
  
    let dateParts = s.split('/')
  
    let year = parseInt(dateParts[2]);
    let month = parseInt(dateParts[0] - 1);
    let day = parseInt(dateParts[1]);
  
    let date = new Date(year, month, day);
  
    return date;
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date