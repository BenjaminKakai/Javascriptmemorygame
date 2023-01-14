// Create audio objects for the sound effects
var flipSound = new Audio("flip.mp3");
var matchSound = new Audio("match.mp3");
var gameOverSound = new Audio("gameover.mp3");

// Play the flip sound when a card is flipped
function playFlipSound() {
  flipSound.currentTime = 0;
  flipSound.play();
}

// Play the match sound when a match is made
function playMatchSound() {
  matchSound.currentTime = 0;
  matchSound.play();
}

// Play the game over sound when the game is over
function playGameOverSound() {
  gameOverSound.currentTime = 0;
  gameOverSound.play();
}
