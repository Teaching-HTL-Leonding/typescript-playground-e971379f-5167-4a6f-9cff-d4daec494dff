let hand: string[] = [];

function setup() {
    createCanvas(500, 500);

    // Here are example hands that you can use to test your program
    const royalFlush = "6H,7H,8H,9H,0H";
    const straightFlush = "5H,6H,7H,8H,9H";
    const fourOfAKind = "5H,5D,5C,5S,0H";
    const fullHouse = "5H,5D,5C,6H,6D";
    const flush = "2H,4H,6H,8H,0H";
    const straight = "5H,6S,7D,8C,9H";
    const threeOfAKind = "5H,5D,5C,6H,7D";
    const twoPairs = "5H,5D,6H,6S,7H";
    const pair = "5H,5D,6H,7D,8H";
    const highCard = "2H,3D,5S,7C,0H";
    const random = shuffleCards();

    // Test the program with the example hands
    //                 +---------- Change this line to test different hands
    //                 |           (e.g. royalFlush, straightFlush, fourOfAKind, ...)
    //                 v
    const handString = random;

    hand = splitCardsString(handString);
}

function mouseClicked() {
    hand = splitCardsString(shuffleCards());
}

function draw() {
    // ⚠️ Do NOT CHANGE this method ⚠️
    background(255);
    drawHand(hand);
    let message = "";
    const counts = getCounts(hand);
    if (isRoyalFlush(hand)) {
        message = "Royal Flush!";
    } else if (isStraightFlush(hand)) {
        message = "Straight Flush!";
    } else if (hasFourOfAKind(counts)) {
        message = "Four of a Kind!";
    } else if (isFullHouse(counts)) {
        message = "Full House!";
    } else if (isFlush(hand)) {
        message = "Flush!";
    } else if (isStraight(hand)) {
        message = "Straight!";
    } else if (hasThreeOfAKind(counts)) {
        message = "Three of a Kind!";
    } else if (hasTwoPairs(counts)) {
        message = "Two Pair!";
    } else if (hasPair(counts)) {
        message = "Pair!";
    } else {
        message = `Highest card:\n${getHighestCard(hand)}`;
    }
    push();
    fill("red");
    textSize(40);
    textAlign(CENTER, TOP);
    text(message, 0, CARD_HEIGHT + 30, CARD_WIDTH * 5 + 4 * 10, height - CARD_HEIGHT);
    pop();
}

/**
* Split a string with comma-separated cards into an array of cards
* 
* @param cards comma-separated cards (e.g. "5H,6H,7H,8H,9H")
* @returns array of cards (e.g. ["5H", "6H", "7H", "8H", "9H"])
* 
* _cards_ is a string like "5H,6H,7H,8H,9H". The first character of
* each card is the value (1..0, 0 stands for 10). The second character
* is the suite (German: "Farbe") (H for hearts, D for diamonds, 
* C for clubs, S for spades) (German: Herz, Karo, Pik, Kreuz).
* 
* The function splits the string into an array of cards.
*/
function splitCardsString(cards: string): string[] {
    let currentcard = "";
    let cardarray: string[] = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] === ",") {
            cardarray.push(currentcard);
            currentcard = "";
        } else {
            currentcard += cards[i]
        }
    }
    cardarray.push(currentcard);
    return cardarray;
}

/**
* Get the value of a card
* 
* @param card card (e.g. "5H")
* @returns value of the card (e.g. 5)
* 
* Do NOT forget that 0 stands for 10. So the value 
* of e.g. "0H" is 10, not 0!
*/
function getCardValue(card: string): number {
    let num = card[0];
    let value = "0";

    switch (num) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": value = num; break;
        case "0": value = "10"; break;
    }

    return parseInt(value);
}

/**
* Get the description of a card
* 
* @param card card (e.g. "5H")
* @returns description of the card (e.g. "5 of hearts")
* 
* The function returns the description of a card. The descriptions
* for the suites are: "hearts" for "H", "spades" for "S",
* "diamonds" for "D", and "clubs" for "C".
* 
* Tip: Consider using the function getCardValue() that you wrote
* before to get the value of the card.
*/
function getCardDescription(card: string): string {
    let suites = card[1];
    let suite = "";
    switch (suites) {
        case "H": suite = "Hearts"; break;
        case "D": suite = "Diamonds"; break;
        case "C": suite = "Clubs"; break;
        case "S": suite = "Spades"; break;
    }

    // DELETE the following line and replace it with
    // a working solution for the function.
    return `${getCardValue(card)} of ${suite}`;
}

/**
* Gets the highest card in the hand
* 
* @param hand hand (e.g. ["5H", "6H", "7H", "8H", "9H"])
* @returns description of highest card in the hand
*          (e.g. "9 of hearts")
* 
* Tip: Consider using the functions that you wrote before.
*/
function getHighestCard(hand: string[]): string {
    let num = 0;
    let index = 0;

    for (let i = 0; i < hand.length; i++) {
        if (getCardValue(hand[i]) > num) {
            num = getCardValue(hand[i]);
            index = i;
        }
    }
    return getCardDescription(`${hand[index]}`);
}

/**
* Get the counts of the cards in the hand
* 
* @param hand hand (e.g. ["5H", "6H", "7H", "8H", "9H"])
* @returns Array with 10 elements, where the element at index i 
* contains the number of cards with value i in the hand
* 
* Example: For the hand "5H,5S,7H,7D,8H" the function returns:
* [0, 0, 0, 0, 0, 2, 0, 2, 1, 0].
*/
function getCounts(hand: string[]): number[] {
    let valuearray: number[] = [];
    let count: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < hand.length; i++) {
        valuearray.push(getCardValue(hand[i]));
    }
    for (let i = 0; i < valuearray.length; i++) {
        count[valuearray[i]]++;
    }
    return count;
}

/**
* Checks if the hand is a flush
* 
* @param hand hand (e.g. ["5H", "6H", "7H", "8H", "9H"])
* @returns true if the hand is a flush, false otherwise
* 
* A hand is a flush if all cards have the same suite.
*/
function isFlush(hand: string[]): boolean {
    let card = ""
    let suites: string[] = [];

    for (let i = 0; i < hand.length; i++) {
        card = hand[i];
        suites.push(card[1]);
    }
    return (suites[0] === suites[1] && suites[2] === suites[3] && suites[0] === suites[2]
        && suites[0] === suites[4])
}

/**
* Checks if the hand is a straight
* 
* @param hand hand (e.g. ["5H", "6H", "7H", "8H", "9H"])
* @returns true if the hand is a straight, false otherwise
* 
* A hand is a straight if the values of the cards are consecutive.
* 
* Tip: Consider using the function getCardValue() that you wrote
* before to get the value of the card.
*/
function isStraight(hand: string[]): boolean {
    let valuearray: number[] = [];
    for (let i = 0; i < hand.length; i++) {
        valuearray.push(getCardValue(hand[i]));
    }
    return (valuearray[0] === valuearray[1] - 1 && valuearray[2] - 2 === valuearray[3] - 3
        && valuearray[0] === valuearray[2] - 2 && valuearray[0] === valuearray[4] - 4);
}

/**
* Checks if the hand is a straight flush
* 
* @param hand hand (e.g. ["5H", "6H", "7H", "8H", "9H"])
* @returns true if the hand is a straight flush, false otherwise
* 
* A hand is a straight flush if it is a flush and a straight.
*/
function isStraightFlush(hand: string[]): boolean {
    return (isFlush(hand) === true && isStraight(hand) === true);
}

/**
* Checks if the hand is a royal flush
* 
* @param hand hand (e.g. ["5H", "6H", "7H", "8H", "9H"])
* @returns true if the hand is a royal flush, false otherwise
* 
* A hand is a royal flush if it is a straight flush
* and the lowest card value is a 6.
*/
function isRoyalFlush(hand: string[]): boolean {
    let firstcard = hand[0];
    return (isFlush(hand) === true && isStraight(hand) === true && firstcard[0] === "6");
}

/**
* Checks if the hand has four of a kind
* 
* @param counts counts (e.g. [0, 0, 0, 0, 0, 2, 0, 2, 1, 0])
* @returns true if the hand has four of a kind, false otherwise
*/
function hasFourOfAKind(counts: number[]): boolean {
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 4) {
            return true;
        }
    }
}

/**
* Checks if the hand has three of a kind
* 
* @param counts counts (e.g. [0, 0, 0, 0, 0, 2, 0, 2, 1, 0])
* @returns true if the hand has three of a kind, false otherwise
*/
function hasThreeOfAKind(counts: number[]): boolean {
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 3) {
            return true;
        }
    }
}

/**
* Gets the number of pairs in the hand
* 
* @param counts counts (e.g. [0, 0, 0, 0, 0, 2, 0, 2, 1, 0])
* @returns number of pairs in the hand (e.g. 2)
*/
function numberOfPairs(counts: number[]): number {

    let paircount = 0;
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 2) {
            paircount++;
        }
    }
    return paircount;
}

/**
* Checks if the hand has two pairs
* 
* @param counts counts (e.g. [0, 0, 0, 0, 0, 2, 0, 2, 1, 0])
* @returns true if the hand has two pairs, false otherwise
*/
function hasTwoPairs(counts: number[]): boolean {
    return (numberOfPairs(counts) === 2);
}

/**
* Checks if the hand has a pair
* 
* @param counts counts (e.g. [0, 0, 0, 0, 0, 2, 0, 2, 1, 0])
* @returns true if the hand has a pair, false otherwise
*/
function hasPair(counts: number[]): boolean {
    return (numberOfPairs(counts) === 1);
}

/**
* Checks if the hand is a full house
* 
* @param counts counts (e.g. [0, 0, 0, 0, 0, 2, 0, 2, 1, 0])
* @returns true if the hand is a full house, false otherwise
* 
* A hand is a full house if it has three of a kind and a pair.
*/
function isFullHouse(counts: number[]): boolean {
    if (hasThreeOfAKind(counts) === true && numberOfPairs(counts) > 0) {
        return true;
    }
}
