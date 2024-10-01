let startTime;
let elapsedTime = 0;
let stopwatchInterval;
const display = document.getElementById('display');


function timeFormatter(time) {
  const minutes = Math.floor(time / 60000); // 1 minuto = 60000 milisegundos
  const seconds = Math.floor((time % 60000) / 1000); // 1 segundo = 1000 milisegundos

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}


function updateDisplay() {
  const currentTime = Date.now();
  const timePassed = currentTime - startTime + elapsedTime;
  display.textContent = timeFormatter(timePassed);
}


document.getElementById('startBtn').addEventListener('click', function() {
  if (!stopwatchInterval) {
    startTime = Date.now();
    stopwatchInterval = setInterval(updateDisplay, 1000);
  }
});


document.getElementById('stopBtn').addEventListener('click', function() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    elapsedTime += Date.now() - startTime;
    stopwatchInterval = null;
  }
});


document.getElementById('resetBtn').addEventListener('click', function() {
  clearInterval(stopwatchInterval);
  elapsedTime = 0;
  stopwatchInterval = null;
  display.textContent = '00:00';
});
