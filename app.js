document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "naeem.jpg",
      img: "images/naeem.jpg",
    },
    {
      name: "rafy.jpg",
      img: "images/rafy.jpg",
    },
    {
      name: "abinav",
      img: "images/abinav.jpg",
    },
    {
      name: "bhai",
      img: "images/bhai.jpg",
    },
    {
      name: "abinav",
      img: "images/abinav.jpg",
    },
    {
      name: "arslan",
      img: "images/arslan.jpg",
    },
    {
      name: "bhai",
      img: "images/bhai.jpg",
    },
    {
      name: "jitesh",
      img: "images/jitesh.jpg",
    },
    {
      name: "naeem.jpg",
      img: "images/naeem.jpg",
    },
    {
      name: "arslan",
      img: "images/arslan.jpg",
    },
    {
      name: "rafy.jpg",
      img: "images/rafy.jpg",
    },
    {
      name: "jitesh",
      img: "images/jitesh.jpg",
    },
  ];

  const grid = document.querySelector(".grid");
  //empty array of card choosen
  var cardsChosen = [];
  //empty array of card choosen ID
  var cardsChosenID = [];
  //function create borad

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      //create image elment
      var card = document.createElement("img");
      //attached the black image with the card
      card.setAttribute("src", "images/black.png");
      //give the id number to each image that id we will use for flip
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  // check your match
  function checkForMatch() {}

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenID.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
