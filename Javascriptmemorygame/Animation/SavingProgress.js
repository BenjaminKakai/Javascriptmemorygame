// Save the game state to local storage
function saveGame() {
    var gameState = {
      cards: [],
      score: 0,
      time: 0
    };
    // Loop through the cards and save their state
    for (var i = 0; i < cards.length; i++) {
      gameState.cards.push({
        id: cards[i].id,
        flipped: cards[i].flipped,
        matched: cards[i].matched
      });
    }
    gameState.score = score;
    gameState.time = time;
    localStorage.setItem("memoryGame", JSON.stringify(gameState));
  }
  
  // Load the game state from local storage
  function loadGame() {
    var gameState = JSON.parse(localStorage.getItem("memoryGame"));
    if (gameState) {
      // Loop through the cards and load their state
      for (var i = 0; i < gameState.cards.length; i++) {
        var card = document.getElementById(gameState.cards[i].id);
        card.flipped = gameState.cards[i].flipped;
        card.matched = gameState.cards[i].matched;
        if (card.flipped) {
          card.classList.add("flipped");
        }
        if (card.matched) {
          card.classList.add("matched");
        }
      }
      score = gameState.score;
      time = gameState.time;
      updateScore();
      updateTime();
    } else {
      startGame();
    }
  }
  