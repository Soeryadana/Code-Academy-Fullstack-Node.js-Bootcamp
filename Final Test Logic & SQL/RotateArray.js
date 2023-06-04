const arr = [3,8,9,7,6]

function rotateArray(array, rotate) {
    for (let i = 0; i < rotate; i++) {
        let lastItem = array.pop();
        array.unshift(lastItem);
    }

    return array;
}

console.log(rotateArray(arr,3)); // putar 3x

// Result :
/**
[3, 8, 9, 7, 6] => [6, 3, 8, 9, 7]
[6, 3, 8, 9, 7] => [7, 6, 3, 8, 9]
[7, 6, 3, 8, 9] => [9, 7, 6, 3, 8]
*/