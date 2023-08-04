

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
    document.getElementById('dateToday').innerText = `${day}/${month}/${year}`
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
setInterval(function(){showClock();}, 1000);

let greetingClick = document.querySelector('#greeting');
let showNameModal = document.querySelector('#nameModal');
let closeModal = document.getElementsByClassName('close')[0];

greetingClick.onclick = () => {
  showNameModal.style.display = 'block';
}

closeModal.onclick = function() {
  showNameModal.style.display = "none";
}

