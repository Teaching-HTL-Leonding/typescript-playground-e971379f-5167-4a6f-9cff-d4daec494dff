function setup() {
    const SIZE = 400;
    const SIDE_LENGTH = 50;

    // We have an isosceles triangle ("gleichschenkeliges Dreieck").
    // This is the formula to calculate the height of such a triangle
    const HEIGHT = SIDE_LENGTH * Math.sqrt(3) / 2;

    createCanvas(SIZE, HEIGHT * 9);
    background("black");

    strokeWeight(1);
    stroke("yellow");
    noFill();

    translate(-SIDE_LENGTH/2, -HEIGHT/2)
    for(let i = 0; i <= SIZE; i +=SIDE_LENGTH){
        triangle(i, HEIGHT, i + SIDE_LENGTH, HEIGHT, i + SIDE_LENGTH/2, 0);
        for(let g = 0; g <= SIZE; g += HEIGHT){
            triangle(i, HEIGHT+ g, i + SIDE_LENGTH, HEIGHT+ g, i + SIDE_LENGTH/2, g);
        }
    }

    // <<< Add code to draw the triangles here
}
