let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

let colorIx: number;
let cards: number;

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  colorIx = Math.floor(random(0, 4));
  let colorname: string;
  switch (colorIx) {
    case 0: colorname = "clubs"; break;
    case 1: colorname = "diamonds"; break;
    case 2: colorname = "hearts"; break;
    case 3: colorname = "spades"; break;
  }

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  cards = Math.floor(random(1, 14));
  cards : any;
switch(cards){
  case 1: cards = A; break;
  case 2: cards = 2; break;
  case 3: cards = 3; break;
  case 4: cards = 4; break;
  case 5: cards = 5; break;
  case 6: cards = 6; break;
  case 7: cards = 7; break;
  case 8: cards = 8; break;
  case 9: cards = 9; break;
  case 10: cards = 10; break;
  case 11: cards = J; break;
  case 12: cards = Q; break;
  case 13: cards = K; break;
}
  cardImage = loadImage(`${BASE_URL}`/`${colorname}`/`${cards}`)

}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);

    text(colorIx, 10, 20);
  text(cards, 10, 40);
}