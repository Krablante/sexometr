/* Єдиний спосіб додати відео через ванільну жс. Тобто це можливо тільки через створення 
елементу на сторінці через жску. Не знаю як там у вас, продвинутих геїв, але тут так.

P.S. потрібно додатково задати стиль через #

let video = document.createElement('video');
video.id = "backVideo";
video.src = "voitenko.mp4";
video.autoplay = true;
video.muted = true;
video.loop = true;

document.body.appendChild(video);

*/
let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalTime = undefined;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  interval = setInterval(updateTime, 1000);
  });
  
pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  timer.textContent = '00:00:00';
});