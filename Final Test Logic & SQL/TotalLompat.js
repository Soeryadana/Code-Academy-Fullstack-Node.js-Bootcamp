// x = posisi awal, y=target posisi, k= jarak temputh satu kali lompatan
function totalLompat(x,y,k) {
    if (x >= y) {
        return 0;
    }

    let jumlahLompatan = 0;
    let posisi = x

    while (posisi < y) {
        posisi += k;
        jumlahLompatan++;
    }

    return jumlahLompatan;
}


console.log(totalLompat(10,85,30));
// Output : 3