// Base URL for all game assets
const baseUrl = 'https://cddataexchange.blob.core.windows.net/data-exchange/sokoban';

// List of image assets to be loaded
// These correspond to different game elements (walls, floor, targets, crates)
const imageNames = [
    `${baseUrl}/Blocks/block_06.png`,  // Wall
    `${baseUrl}/Ground/ground_01.png`, // Floor
    `${baseUrl}/Ground/ground_04.png`, // Target
    `${baseUrl}/Crates/crate_43.png`,  // Box/Crate
    `${baseUrl}/Crates/crate_08.png`   // Box on target
];

// Array to store loaded p5 image objects
const images: p5.Image[] = [];

// Current level being displayed
// Note that the file levels.ts contains the level data
// for multiple levels as strings. Switch between levels
// by changing the index in the levels array. Test your
// implementation with different levels.
const levelString = levels[0];

// 2D array to store the level grid after parsing
let level: string[][] = [];

// Tracks the maximum width of any row in the level for canvas sizing
let maxWidth = 0;
function preload() {
    // Schleife über alle Bild-URLs in imagesNames.
    // --> für jedes Bild-URL: Bild laden und in images einfügen
    for (const imageName of imageNames) {
        const img = loadImage(imageName);
        images.push(img);
    }

    for (const line of levelString.split('\n')) {
        const chars = line.split('');
        level.push(chars);
    }
}

/**
* Returns the appropriate image for a given tile type
* @param type - The character symbol representing the tile type
* @returns The corresponding p5.Image object
*/
function getBlockImageBySymbol(type: string): p5.Image {
    switch (type) {
        case "X": return images[0];
        case ".": return images[2];
        case " ":
        case "@": return images[1];
        case "b": return images[3];
        case "B": return images[4];
    }
    /* if (type === "X") {
         return images[0];
     } else if (type === ".") {
         return images[2];
     } else if (type === "@") {
         return images[1];
     } else if (type === "b") {
         return images[3];
     } else if (type === " ") {
         return images[1];
     }else if (type === "B") {
         return images[4];
     }*/
}

// Size of each cell in pixels
const cellSize = 64;

function setup() {
    createCanvas(1000, 1000);
    background("white");
    for (const row of level) {
        push();
        for (const cell of row) {
            if (cell !== "_") {
                const img = getBlockImageBySymbol(cell);
                image(img, 0, 0, cellSize, cellSize);
            }
                translate(cellSize, 0);
        }
        pop();
        translate(0, cellSize); // row = Zeile
    }
}