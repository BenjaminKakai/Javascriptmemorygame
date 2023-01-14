// Initialize the timer variables
var startTime;
var intervalId;

// Start the timer when the game begins
startTime = Date.now();
intervalId = setInterval(updateTimer, 1000);

// Update the timer every second
function updateTimer() {
  var elapsedTime = Date.now() - startTime;
  var minutes = Math.floor(elapsedTime / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);
  document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}

// Stop the timer when the game is over
function stopTimer() {
  clearInterval(intervalId);
}

