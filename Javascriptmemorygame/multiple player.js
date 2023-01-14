// Initialize score variables for player 1 and player 2
var player1Score = 0;
var player2Score = 0;

// Create a variable to keep track of the current player
var currentPlayer = 1;

// Increase the score for the current player
function increaseScore() {
  if (currentPlayer === 1) {
    player1Score++;
  } else {
    player2Score++;
  }
}

// Switch the current player
function switchPlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
}

// Display the scores for both players
function displayScores() {
  document.getElementById("player1Score").innerHTML = player1Score;
  document.getElementById("player2Score").innerHTML = player2Score;
}
