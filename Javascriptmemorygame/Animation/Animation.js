// Add the flip animation to a card
function flipCard(card) {
    card.classList.add("flip");
    setTimeout(function() {
      card.classList.remove("flip");
    }, 500);
  }
  
  // Add the matching animation to a card
  function matchCard(card) {
    card.classList.add("match");
  }
  