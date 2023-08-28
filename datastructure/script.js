//Stacks: Check if a given string of parentheses are balanced. Use stacks.
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Parenthesis {
    constructor() {
        this.openParenthesis = ['{', '[', '(']; 
        this.closeParenthesis = ['}', ']', ')']; 
    }
    isBalance(string) {
        const stack = new Stack();
        for (let char of string) {
            if (this.openParenthesis.includes(char)) {
                stack.push(char);
            } else if (this.closeParenthesis.includes(char)) {
                const lastOpen = stack.pop();
                if(!lastOpen) {
                    return false;
                }
            
                const curOpen = this.openParenthesis[this.closeParenthesis.indexOf(char)];
                if (lastOpen !== curOpen) {
                    return false; 
                }
            }
        }
        return stack.isEmpty();
    }
} 


const checkParenthesis = new Parenthesis();
let entry1 = '{[()]}';
let entry2 = '{[()}';

console.log(`Balance Check: ${entry1} = ${checkParenthesis.isBalance(entry1)}`);
console.log(`Balance Check: ${entry2} = ${checkParenthesis.isBalance(entry2)}`);


//Queues: Check if palindrome (reads same forward and backward). Use queues.
//Examples of palindromes: civic, radar, level, racecar, kayak

class Queue {
    constructor() {
      this.items = [];
    }

    enqueue(item) {
      this.items.push(item);
    }

    dequeue() {
      return this.items.shift();
    }

    isEmpty() {
      return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }
  }


  class Palincdrome {
    isPalindrome(string) {
        const queue = new Queue();

        for(let char of string) {
            queue.enqueue(char);
        }
        let reversedStr = '';
        while (!queue.isEmpty()) {
            reversedStr = queue.dequeue() + reversedStr;
        }
        console.log(string);
        console.log(reversedStr);
    return string === reversedStr;
    }
    
  }

const checkPalindrome = new Palincdrome();
console.log(checkPalindrome.isPalindrome('luh'));

// Hashmaps: Implement a function that takes an array of integers and return the most frequent element.
// Example: [1,2,3,1,6,7,1,8,9]

class HashMap {
    constructor() {
      this.map = {};
    }

    put(key, value) {
      this.map[key] = value;
    }

    get(key) {
      return this.map[key];
    }

    remove(key) {
      if (this.map.hasOwnProperty(key)) {
        delete this.map[key];
      }
    }

    containsKey(key) {
      return this.map.hasOwnProperty(key);
    }

    keys() {
      return Object.keys(this.map);
    }

    values() {
      return Object.values(this.map);
    }
}

class Occurrences {
    isReoccured(arr) {
        const hashmap = new HashMap();
        const reoccurenceArr = [];
        for(i = 0; i < arr.length; i++) {
            if(arr[i] === hashmap.containsKey[i]){
                
                
            }
        }

    }
}

