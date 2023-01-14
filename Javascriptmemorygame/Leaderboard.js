// Initialize an array to store the scores
var leaderboard = [];

// Add a score to the leaderboard
function addScore(name, score) {
  leaderboard.push({name: name, score: score});
  leaderboard.sort(function(a, b) {
    return b.score - a.score;
  });
}

// Display the leaderboard
function displayLeaderboard() {
  var leaderboardTable = document.getElementById("leaderboardTable");
  leaderboardTable.innerHTML = "";
  for (var i = 0; i < leaderboard.length; i++) {
    var row = leaderboardTable.insertRow();
    var nameCell = row.insertCell();
    var scoreCell = row.insertCell();
    nameCell.innerHTML = leaderboard[i].name;
    scoreCell.innerHTML = leaderboard[i].score;
  }
}
