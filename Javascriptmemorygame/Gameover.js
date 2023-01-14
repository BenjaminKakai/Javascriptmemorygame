// Initialize a variable to keep track of the number of matches
var matches = 0;

// Check if the game is over
function checkGameOver() {
  if (matches === numCards / 2) {
    alert("Congratulations! You won the game with a score of " + score);
    playGameOverSound();
  }
}

// Increase the number of matches and check if the game is over
function increaseMatches() {
  matches++;
  checkGameOver();
}
