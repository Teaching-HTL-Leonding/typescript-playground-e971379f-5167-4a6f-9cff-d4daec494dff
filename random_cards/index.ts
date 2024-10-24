let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

let colorIx: number;
let cardIx: number;

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
  cardIx = Math.floor(random(1, 14));
switch(cardIx){
  case 1: cardIx = ; break;
}
  cardImage = loadImage(`${BASE_URL}/${colorname}/${cardIx}`)

}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);

    text(colorIx, 10, 20);
  text(cardIx, 10, 40);
}