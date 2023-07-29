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
let toBuy = document.querySelector('#toBuy');
let fridge = document.querySelector('#fridge');


let moveUpBtn = document.querySelector('#moveUp');
let moveDownBtn = document.querySelector('#moveDown');

function moveDown(){
    let buyList = toBuy.value.split('\n');
    let removeItem = buyList.pop();
    toBuy.value = buyList.join('\n');
    const newFridgeLIst = 
    console.log(newFridgeLIst)
}

function moveUp(){
    let fridgeList = fridge.value.split('\n');
}

moveDownBtn.onclick = () => {
    moveDown();
}
