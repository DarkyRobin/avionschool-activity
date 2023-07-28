// Multiples of 3 or 5

// Problem 1
// If we list all the natural numbers below 10 that are multiples of 
// 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


function sumAllMultples(l){
    let sum = 0;
    for(i = 1; i<l; i++){
        if(i%3 === 0 || i%5 === 0){
            sum += i;
        }
    }
    return sum;
}
let limit = 1000;
console.log(sumAllMultples(limit));

