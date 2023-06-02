/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1, y1, x2, y2) {
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    return "input kordinat dalam angka";
  } else {
    // let a = x1 - x2;
    // let b = y1 - y2;
    // let distance = Math.sqrt(a*a + b*b);

    // let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    let distance = Math.hypot(x2-x1, y2-y1);
    return distance;
  }
}

console.log(getCordinat(3, 4, -4, -5)); //9 real output 11.40175425099138
console.log(getCordinat("1", "2", "-1", "-2")); //1 real output 4.47213595499958
console.log(getCordinat("x", "2", "-y", "-2")); //input kordinat dalam angka
console.log(getCordinat(3.2, 4.5, -4.4, -5)); //13.695801445917125 real output 12.165936051122411

// idk what is wrong, either the expected output or my function
// i try 3 different way with the same result but not mathing the expected output
// i even calculate it manually based on this video https://www.youtube.com/watch?v=YDvUy5VYm9E
// they all resulted the same but the expected output