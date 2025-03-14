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
    // Schleife über alle Bild-URLS in imagesNames
    // --> für jedes Bild-URL: Bild laden und in images einfügen
    for(const imageName of imageNames){
    images.push(loadImage(imageName))
    }

    for(const line of levelString.split('\n')){
        const chars = line.split(''); 
        level.push(chars);
    }

    console.log(level); //stringify
    // <<< Add code to parse the level string into a 2D array
}

/**
* Returns the appropriate image for a given tile type
* @param type - The character symbol representing the tile type
* @returns The corresponding p5.Image object
*/
function getBlockImageBySymbol(type: string): p5.Image {
    // <<< Add necessary code here
    return images[0]; // <<< Replace this code with your implementation
}

// Size of each cell in pixels
const cellSize = 64;

function setup() {
    // <<< Add code to create a canvas sized to fit the level dimensions

    // <<< Add code to draw level
}
