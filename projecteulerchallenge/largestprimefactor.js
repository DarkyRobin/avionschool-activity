/* <p>The prime factors of $13195$ are $5, 7, 13$ and $29$.</p>
<p>What is the largest prime factor of the number $600851475143$?</p> */

function isPrime(number) {
    if(number <= 1) {
        return false;
    }

    for(i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

function largestPrimeNumber(maxNum) {
    for(i = maxNum; i >=2; i--) {
        if(isPrime(i)) {
            return i;
        }
    }
    return null;
}

function largestPrimeFactor(number) {
    let largestFactor = 0;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 && isPrime(i)) {
        largestFactor = i;
        }
    }

    return largestFactor;
}

const maxNumber = 100;
const largestPrime = largestPrimeNumber(maxNumber);
console.log(largestPrime); 