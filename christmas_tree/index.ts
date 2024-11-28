const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;


function setup() {
  let trianglebase = INITIAL_TRIANGLE_BASE_WIDTH;
  let triangleheight = trianglebase * HEIGHT_TO_WIDTH_RATIO;
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();

    translate(width/2, TOP_MARGIN);
  for(let i = 1; i <= NUMBER_OF_LAYERS; i ++){
    triangle(0, 0, -INITIAL_TRIANGLE_BASE_WIDTH/2*i, triangleheight*i, 
    INITIAL_TRIANGLE_BASE_WIDTH/2*i, triangleheight*i)
   translate(0, triangleheight/2*i)
  }


  fill("brown");
  rect(-TRUNK_WIDTH/2, triangleheight*2, TRUNK_WIDTH, TRUNK_HEIGHT);

}
