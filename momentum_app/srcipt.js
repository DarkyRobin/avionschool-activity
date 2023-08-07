
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "It always seems impossible until it's done. - Nelson Mandela",
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

window.addEventListener("load", (event) => {
  const randomQuote = getRandomQuote();
  document.getElementById('randQuote').innerText = randomQuote;
});


function showClock() {
    let date = new Date();
    let hour = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    document.getElementById('hour').innerText = hour;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
setInterval(function(){showClock();}, 1000);

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function formatDateToCustomFormat(date) {
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day} ${year}`;
}
const currentDate = new Date();
const formattedDate = formatDateToCustomFormat(currentDate);
document.getElementById('dateToday').innerText = formattedDate;

let greeting = document.querySelector('#greeting');
let showNameModal = document.querySelector('#nameModal');
let closeModal = document.getElementsByClassName('close')[0];
let close2Modal = document.getElementsByClassName('close-2')[0];
let showTodoModal =document.querySelector('#todoModal'); 
let toDo = document.querySelector('#todo');


greeting.append(`Hi. Click me to enter your name`);

greeting.onclick = () => {
  showNameModal.style.display = 'block';
}

closeModal.onclick = function() {
  showNameModal.style.display = "none";
}

toDo.onclick = () => {
  showTodoModal.style.display = 'block';
}

closeModal.onclick = function() {
  showNameModal.style.display = "none";
}

close2Modal.onclick = function() {
  showTodoModal.style.display = "none";
}

let addNameBtn = document.getElementById('enterName');
addNameBtn.addEventListener('click',enterName);
username.addEventListener('keyup', (event) => {
  console.log(event.key)
  if (event.key === 'Enter') {
    enterName();
  }
});
 

function enterName(){
  let username =  document.getElementById('username');
  greeting.innerHTML = '';
  greeting.append(`Hey there ${username.value}! How was your day?`);
  showNameModal.style.display = "none";
}

let todoArr = [];
let todoList = document.getElementById('todolist')
let taskInput = document.getElementById('task');
let addTaskBtn = document.getElementById('enterTodo');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskValue  = taskInput.value.trim();

  if (taskValue === ''){
    return;
  } 
  
  const todoListItem = document.createElement('li');
  todoListItem.innerHTML = `<span>${taskValue} </span><span class='deleteItem'>&times;</span>`;
  todoList.appendChild(todoListItem);
  taskInput.value = '';

  const deleteButton = todoListItem.querySelector('.deleteItem');
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(todoListItem);
  });
}

taskInput.addEventListener('keyup', (event) => {
  console.log(event.key)
  if (event.key === 'Enter') {
    addTask();
  }
});

