/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    if (type == 'yen') {
        let converted = money * 130.12;
        let formatted = converted.toLocaleString('id-ID', {style : 'currency', currency : 'IDR'});
        return formatted;
    } else if (type == 'usd') {
        let converted = money * 14382.5;
        let formatted = converted.toLocaleString('id-ID', {style : 'currency', currency : 'IDR'});
        return formatted;
    } else if (type == 'euro') {
        let converted = money * 16000;
        let formatted = converted.toLocaleString('id-ID', {style : 'currency', currency : 'IDR'});
        return formatted;
    } else {
        return 'no match type currency';   
    }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency