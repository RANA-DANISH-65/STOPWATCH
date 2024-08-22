// Variables to keep track of time
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// Variable to store the interval ID for the timer
let timerInterval;

// Flag to check if the timer is currently running
let isRunning = false;

// DOM elements for displaying time
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

// DOM elements for control buttons
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Function to update the time display on the page
function updateDisplay() {
    // Update the display with zero-padded time values
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    millisecondsDisplay.textContent = String(milliseconds).padStart(2, '0');
}

// Function to start the timer
function startTimer() {
    // Prevent starting a new timer if one is already running
    if (isRunning) return;

    // Set the flag to true indicating the timer is running
    isRunning = true;

    // Update the timer every 10 milliseconds
    timerInterval = setInterval(() => {
        milliseconds++;

        // If milliseconds reach 100, reset to 0 and increment seconds
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }

        // If seconds reach 60, reset to 0 and increment minutes
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        // Update the display with the new time values
        updateDisplay();
    }, 10);
}

// Function to stop the timer
function stopTimer() {
    // Clear the interval to stop the timer
    clearInterval(timerInterval);

    // Set the flag to false indicating the timer is stopped
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    // Clear the interval to stop the timer if it is running
    clearInterval(timerInterval);

    // Set the flag to false indicating the timer is not running
    isRunning = false;

    // Reset time values to 0
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    // Update the display with the reset time values
    updateDisplay();
}

// Add event listeners to control buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the display with zeroed time values
updateDisplay();
