/** buat segitiga  */ 
let se

for (let i = 4; i >= 1; i--) {
    let triangle = '';
    for (let j = 1; j <= i; j++) {
        triangle += (j) + ' ';
    }
    console.log(triangle);
} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for (let i = 5; i >= 1; i--) {
    let triangle = '';
    for (let j = i; j >= 1; j--) {
        triangle += (j) + ' ';
    }
    console.log(triangle);
}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

