const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  createCanvas(500, 500);
  background("black");
  noStroke();
  let trianglebase = INITIAL_TRIANGLE_BASE_WIDTH;
  let triangleheight = INITIAL_TRIANGLE_BASE_WIDTH * HEIGHT_TO_WIDTH_RATIO;

  translate(width / 2, TOP_MARGIN + triangleheight);

  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < NUMBER_OF_LAYERS; i++) {

      if (pass === 0) {
        fill("green");
        triangle(-trianglebase / 2, 0, 0, -triangleheight,
          trianglebase / 2, 0);
      }
      else {
        fill("red");
        circle(-trianglebase / 2, SPHERE_DIAMETER / 2, SPHERE_DIAMETER);
        circle(trianglebase / 2, SPHERE_DIAMETER / 2, SPHERE_DIAMETER);
      }
      if (i < NUMBER_OF_LAYERS - 1) {
        translate(0, triangleheight);
        trianglebase = trianglebase * 1.5;
        triangleheight = trianglebase / 2;
      }
    }
  }



  // <<< Draw the tree
}
