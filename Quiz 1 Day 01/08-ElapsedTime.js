/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if (isNaN(seconds)) {
        return seconds + ' is not a number';
    } else {
        let day = Math.floor(seconds / (24 * 60 * 60));
        let hour = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        let minute = Math.floor((seconds % (60 * 60)) / 60);
        let reminderSecond = seconds % 60;

        return day + ' hari ' + hour + ' jam ' + minute + ' menit ' + reminderSecond + ' detik';
    }
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik