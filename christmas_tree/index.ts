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
  let triangleheight = trianglebase * HEIGHT_TO_WIDTH_RATIO;
  translate(width / 2, TOP_MARGIN + triangleheight);

  {
    for (let i = 0; i < NUMBER_OF_LAYERS; i++) {
      fill("green");
      triangle(-trianglebase / 2, 0, trianglebase / 2, 0, 0, -triangleheight);
      fill(Math.floor(random(0, 256)), Math.floor(random(0, 256)), Math.floor(random(0, 256)))
      circle(trianglebase / 2, SPHERE_DIAMETER / 2, SPHERE_DIAMETER);
      circle(-trianglebase / 2, SPHERE_DIAMETER / 2, SPHERE_DIAMETER);

      if (i < NUMBER_OF_LAYERS - 1) {
        translate(0, triangleheight);
        trianglebase = trianglebase * 1.5;
        triangleheight = trianglebase * HEIGHT_TO_WIDTH_RATIO;
      }
    }
  }

  fill("brown");
  rect(-TRUNK_WIDTH / 2, 0, TRUNK_WIDTH, TRUNK_HEIGHT);
  // <<< Draw the tree
}
