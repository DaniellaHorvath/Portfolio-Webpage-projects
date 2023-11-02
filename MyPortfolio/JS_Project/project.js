const cardArray = [
  {
    name: "space.1",
    img: "img/img.1.1.jpg",
  },
  {
    name: "space.2",
    img: "img/img.1.2.jpg",
  },
  {
    name: "spacegirl.1",
    img: "img/img.1.5.jpg",
  },
  {
    name: "spaceman.1",
    img: "img/img.1.6.jpg",
  },
  {
    name: "spaceship.1",
    img: "img/img.1.7.jpg",
  },
  {
    name: "spaceship.2",
    img: "img/img.1.8.jpg",
  },
  {
    name: "space.1",
    img: "img/img.1.1.jpg",
  },
  {
    name: "space.2",
    img: "img/img.1.2.jpg",
  },
  {
    name: "spacegirl.1",
    img: "img/img.1.5.jpg",
  },
  {
    name: "spaceman.1",
    img: "img/img.1.6.jpg",
  },
  {
    name: "spaceship.1",
    img: "img/img.1.7.jpg",
  },
  {
    name: "spaceship.2",
    img: "img/img.1.8.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random()); //sort an array randomly, this is a shortcut to shuffle an array

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

const button = document.querySelector("button");
button.addEventListener("click", () => {
  window.location.reload();
});

function creatBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/front3.2.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
creatBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log(cards);
  console.log("Check for match!");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "img/front3.2.jpg");
    cards[optionTwoId].setAttribute("src", "img/front3.2.jpg");
    alert("You have clicked the same image!");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute("src", "img/lightblue.1.jpg");
    cards[optionTwoId].setAttribute("src", "img/lightblue.1.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "img/front3.2.jpg");
    cards[optionTwoId].setAttribute("src", "img/front3.2.jpg");
    alert("Sorry try again!");
  }
  resultDisplay.innerHTML = cardsWon.length; //we can use text.Content as well
  cardsChosen = [];
  cardsChosenIds = [];

  //we have 12 cards so we get 6 matches that is why we have to devide it by 2
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulation, now you can take off!🚀";
  }
}

function flipCard() {
  // console.log(cardArray);
  const cardId = this.getAttribute("data-id"); // this item allowing us to interact whatever elements we click
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  // console.log("clicked", cardId);
  //console.log(cardsChosen);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
