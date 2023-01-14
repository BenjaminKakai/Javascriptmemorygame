// Set the number of cards based on the difficulty level
var difficulty = "medium";
var numCards;
if (difficulty === "easy") {
  numCards = 8;
} else if (difficulty === "medium") {
  numCards = 16;
} else if (difficulty === "hard") {
  numCards = 24;
}

// Create an array of images
var images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg"
];

// Shuffle the images
images.sort(function() { return 0.5 - Math.random() });

// Create an array of image objects
var imageObjects = [];
for (var i = 0; i < numCards/2; i++) {
  var image = new Image();
  image.src = images[i];
  imageObjects.push(image);
}

// Create an array of cards
var cards = [];
for (var i = 0; i < numCards; i++) {
  var card = {
    image: imageObjects[i % (numCards/2)],
    flipped: false,
    x: (i % 4) * 100,
    y: Math.floor(i / 4) * 100
  };
  cards.push(card);
}
