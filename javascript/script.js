// const animal = {
//     animalType: 'dog',
//     breed: 'Shipoo',
//     age: '8',
//     catFriendly: false,
//     petName: 'Goku',
//     sayHi: function(){
//         return (`Henlo there! I'm ${this.petName}, an ${this.age}-year-old ${this.breed}.`)
//     } 
// }

// console.log(animal.sayHi());
// console.log(`Am I cat friendly? ${animal['catFriendly']}`);

// let newFlower = {
//     name: 'sunflower',
//     origin: 'Europe'
// }
// let gardenPlants = [ 
//     {
//         name: 'roses', 
//         origin: 'China'
//     },
//     {
//         name: 'tulips', 
//         origin: 'Asia'
//     },
// ]
// console.log(gardenPlants.unshift(newFlower))
// let die = Math.floor(Math.random() * 6 + 1);
// console.log(die)

// let username = 'Spykid';
// let password = 'Pa$$key';

// if(username !== 'Spykid' && password !== 'Pa$$key') {
//     console.log('Incorrect username and password!');
// } else {
//     console.log('User successfully log in.');
// }



// const itemsArray = [
//     'apple',
//     'banana',
//     'orange',
//     'grapes',
//     'watermelon',
//     'kiwi',
//     'mango',
//     'strawberry',
//     'pineapple',
//     'pear',
//     'blueberry',
//     'peach',
//     'plum',
//     'cherry',
//     'raspberry',
//     'lemon',
//     'lime',
//     'avocado',
//     'pomegranate',
//     'blackberry'
//   ];

// for (let i = 0; i < itemsArray.length; i++) {
//     console.log(itemsArray[i]);
// }

// for (let i = 0; i <=20 ; i++) {
//     if(i%2 === 0) {
//         console.log(`${i} is EVEN.`)
//     } else {
//         console.log(`${i} is ODD.`)
//     }
// }

// function formatLikes(likes) {
//     const count = likes.length;
  
//     if (count === 0) {
//       return "no one likes this";
//     } else if (count === 1) {
//       return likes[0] + " likes this";
//     } else if (count === 2) {
//       return likes[0] + " and " + likes[1] + " like this";
//     } else if (count === 3) {
//       return likes[0] + ", " + likes[1] + " and " + likes[2] + " like this";
//     } else {
//       return likes[0] + ", " + likes[1] + " and " + (count - 2) + " others like this";
//     }
//   }
  
//   // Test cases
//   console.log(formatLikes([])); // Output: "no one likes this"
//   console.log(formatLikes(["Peter"])); // Output: "Peter likes this"
//   console.log(formatLikes(["Jacob", "Alex"])); // Output: "Jacob and Alex like this"
//   console.log(formatLikes(["Max", "John", "Mark"])); // Output: "Max, John and Mark like this"
//   console.log(formatLikes(["Alex", "Jacob", "Mark", "Max"])); // Output: "Alex, Jacob and 2 others like this"

// function validatePIN (pin) {
//     let pinlength = pin.length;
//     let isNumber = containsOnlyNumbers(pin);
//     if(isNumber === true){
//         if(pinlength === 4 || pinlength === 6){
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

// function containsOnlyNumbers(input) {
//     return /^\d+$/.test(input);
// }

// console.log(validatePIN('1234'));

// let eve = document.querySelector('.eve');
// let x = 0;
// eve.onclick = function() {
//     x = x + 40;
//     eve.style.left = x + 'px';
// }

//Initialize DOMS to variables 
let toBuyArr = [];
let fridgeArr =[];
let toBuy = document.querySelector('#toBuy');
let fridge = document.querySelector('#fridge');

let moveUpBtn = document.querySelector('#moveUp');
let moveDownBtn = document.querySelector('#moveDown');
let removeItem = "";

function moveDown(){
    toBuyArr = toBuy.value.split('\n');
    removeItem = toBuyArr.pop();
    toBuy.value = toBuyArr.join('\n');
    fridgeArr.push(removeItem);
    fridge.value = fridgeArr.join('\n');
    console.log(toBuyArr)
}

function moveUp(){
    fridgeArr = fridge.value.split('\n');
    removeItem = fridgeArr.pop();
    fridge.value = fridgeArr.join('\n');
    toBuyArr.push(removeItem);
    toBuy.value = toBuyArr.join('\n');
    console.log(fridgeArr)
}

moveDownBtn.onclick = () => {
    moveDown();
}

moveUpBtn.onclick = () => {
    moveUp();
}

// 1: Print Numbers Write a function that takes an integer n as input and prints numbers from 1 to n.
function inputNumber(n) {
    for(i = 1; i <= n; i++) {
        console.log(i);
    }
}

// 2: Sum of Natural Numbers Write a function that takes an integer n as input and calculates the sum of all 
// natural numbers from 1 to n.

function sumOfAll(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

//3:Multiplication Table Write a function that takes an integer n as input and prints the 
// multiplication table for that number from 1 to 10.

function multiplicationTable(n){
    let product = 0;
    for (let i = 1; i <= 10; i++) {
        product = n * i;
        console.log(`${n} X ${i} is equals to ${product}`)
    }
}

// 4: Factorial Write a function that takes a positive integer n as input and returns its factorial using a for loop.
function factorial(n){
    let res = 1;
    for(i = 1; i <= n; i++){
        res *= i;
    }
    console.log(res);
}

//5: Count Even Numbers Write a function that takes an array of numbers as 
// input and returns the count of even numbers in the array using a for loop.

function countEvenNumbers(arr){
    let count = 0;
    for(i = 0; i <= arr.length; i++){
        if(arr[i]%2 === 0){
            count++;
        }
    }
    return count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenCount = countEvenNumbers(numbers);
console.log(`The count of even numbers in the array is: ${evenCount}`);

// 6: Check Prime Number Write a function that takes an integer n as input 
// and returns true if it's a prime number, false otherwise, using a for loop.

function isPrime(n){
    if (n <= 1) {
    return false;
    }

    // Loop to check for divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        // The number has a divisor other than 1 and itself, so it is not prime
        return false;
    }
    }

    // If no divisors are found, the number is prime
    return true;
}

const input = 109;
if (isPrime(input)) {
  console.log(`${input} is a prime number.`);
} else {
  console.log(`${input} is not a prime number.`);
}

// 7: Reverse an Array Write a function that takes an array as 
// input and returns a new array with elements in reverse order using a for loop.
function reverseArr(arr){
    const newArr = arr.reverse();
    return newArr;
}

const thisArr = ["Banana", "Orange", "Apple", "Mango"];
console.log(reverseArr(thisArr));

//8: Count Occurrences Write a function that takes an array of numbers and a target number as input and returns the count of 
// occurrences of the target number in the array using a for loop.

function countOccurences(arr, n){
    let count = 0;
    for(i = 0; i < arr.length; i++){
       if(arr[i] === n){
        count++;
       }
    }
    return count;
}

const numberOfArr = [1, 2, 3, 5, 7, 9, 8, 8, 9, 9, 0];
let num = 9;
console.log(`The array contains ${countOccurences(numberOfArr, num)} occurences of the number ${num}.`);

// 9: Find the Smallest Number Write a function that takes an array of numbers as input and returns the smallest
// number in the array using a for loop.
function smallestNumber(arr){
    let smallNum = Math.min(...arr);
    return smallNum;
}

const numberArr = [23, 122, 1, 23, 4, 56];
console.log("Lowest Number: " + smallestNumber(numberArr)); // smallest Number: 1


// 10: Generate a Pattern Write a function that takes an integer n as input and generates a pattern of n lines using asterisks (*) and a for loop. The 
// first line will have 1 asterisk, the second line will have 2 asterisks, and so on.

function generatePattern(n){
    for(i = 1; i <= n; i++){
        let line = '';
        for(j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line)
    }
}