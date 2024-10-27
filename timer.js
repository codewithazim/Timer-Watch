// script.js
let timerInterval;
let nanoseconds = 0;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateDisplay() {
    document.getElementById('milliseconds').textContent = String(milliseconds).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('nanoseconds').textContent = String(nanoseconds).padStart(2, '0');
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        nanoseconds += 20;
        milliseconds +=10;

        if (nanoseconds >=1000000){
            nanoseconds = 0;
            milliseconds++;
        }

        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    nanoseconds = 0;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
