let backgroundimages: p5.Image[] = [];
let backgroundscale: number = 1;
let scaledimagewidth: number = 0;
let scaledimageheight: number = 0;
let scrollposition: number = 0;

function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundimages.push(loadImage(`${BASE_URL}/${themeNames[2]}/${winter[i]}`));
    }
}
function setup() {
    createCanvas(500, 500);

    backgroundscale = width / backgroundimages[0].width;
    scaledimagewidth = backgroundimages[0].width * backgroundscale;
    scaledimageheight = backgroundimages[0].height * backgroundscale;
}

function draw() {
    background("black");

    if (keyIsDown(39)) {
        scrollposition -= 5;
    } else if (keyIsDown(37)) {
        scrollposition += 5;
    }
    // translate(scrollposition, 0);
    let step = scrollposition / backgroundimages.length;

    translate(200,0); scale(0.25,0.25);

    for (let i = 0; i < winter.length; i++) {
        translate(step, 0);
        image(backgroundimages[i], -scaledimagewidth, 0, scaledimagewidth, scaledimageheight);
        image(backgroundimages[i], 0, 0, scaledimagewidth, scaledimageheight);
        image(backgroundimages[i], scaledimagewidth, 0, scaledimagewidth, scaledimageheight);
    }
}