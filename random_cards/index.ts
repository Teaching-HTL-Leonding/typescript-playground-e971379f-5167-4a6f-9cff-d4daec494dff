let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));

  switch (colorIx && cardIx) {
    case 0 && 1: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/A.png.`); break;
    case 0 && 2: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/2.png.`); break;
    case 0 && 3: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/3.png.`); break;
    case 0 && 4: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/4.png.`); break;
    case 0 && 5: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/5.png.`); break;
    case 0 && 6: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/6.png.`); break;
    case 0 && 7: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/7.png.`); break;
    case 0 && 8: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/8.png.`); break;
    case 0 && 9: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/9.png.`); break;
    case 0 && 10: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/10.png.`); break;
    case 0 && 11: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/J.png.`); break;
    case 0 && 12: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/Q.png.`); break;
    case 0 && 13: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/K.png.`); break;

    case 1 && 1: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/A.png.`); break;
    case 1 && 2: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/2.png.`); break;
    case 1 && 3: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/3.png.`); break;
    case 1 && 4: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/4.png.`); break;
    case 1 && 5: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/5.png.`); break;
    case 1 && 6: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/6.png.`); break;
    case 1 && 7: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/7.png.`); break;
    case 1 && 8: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/8.png.`); break;
    case 1 && 9: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/9.png.`); break;
    case 1 && 10: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/10.png.`); break;
    case 1 && 11: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/J.png.`); break;
    case 1 && 12: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/Q.png.`); break;
    case 1 && 13: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/diamonds/K.png.`); break;

    case 2 && 1: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/A.png.`); break;
    case 2 && 2: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/2.png.`); break;
    case 2 && 3: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/3.png.`); break;
    case 2 && 4: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/4.png.`); break;
    case 2 && 5: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/5.png.`); break;
    case 2 && 6: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/6.png.`); break;
    case 2 && 7: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/7.png.`); break;
    case 2 && 8: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/8.png.`); break;
    case 2 && 9: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/hearts/9.png.`); break;
    case 2 && 10: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/10.png.`); break;
    case 2 && 11: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/J.png.`); break;
    case 2 && 12: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/Q.png.`); break;
    case 2 && 13: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/clubs/K.png.`); break;

    case 3 && 1: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/A.png.`); break;
    case 3 && 2: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/2.png.`); break;
    case 3 && 3: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/3.png.`); break;
    case 3 && 4: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/4.png.`); break;
    case 3 && 5: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/5.png.`); break;
    case 3 && 6: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/6.png.`); break;
    case 3 && 7: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/7.png.`); break;
    case 3 && 8: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/8.png.`); break;
    case 3 && 9: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/9.png.`); break;
    case 3 && 10: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/10.png.`); break;
    case 3 && 11: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/J.png.`); break;
    case 3 && 12: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/Q.png.`); break;
    case 3 && 13: cardImage = loadImage(`https://cddataexchange.blob.core.windows.net/images/cards/spades/K.png.`); break;
  }3  // <<< Add code here
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
