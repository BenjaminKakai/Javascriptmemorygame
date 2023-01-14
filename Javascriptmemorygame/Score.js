// Initialize the score variable
var score = 0;

// Increase the score when a correct match is made
function increaseScore() {
  score++;
  document.getElementById("score").innerHTML = score;
}

// Decrease the score when an incorrect match is made
function decreaseScore() {
  score--;
  document.getElementById("score").innerHTML = score;
}

