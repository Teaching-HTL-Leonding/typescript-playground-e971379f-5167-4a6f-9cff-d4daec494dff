function setup() {
    createCanvas(120, 150);

    background("cyan");

    fill("grey");
    circle(60, 80, 80);

    triangle(20, 50, 40, 40, 20, 20);

    triangle(80, 40, 100, 50, 100, 20);

    fill("pink")
    triangle(55, 80, 65, 80, 60, 85);

    fill("black");
    circle(45, 70, 5);
    circle(75, 70, 5);

    line(30, 80, 45, 80);
    line(75, 80, 90, 80);
    line(30, 90, 45, 85);
    line(90, 90, 75, 85);

    line(60, 85, 60, 95);

    line(60, 95, 50, 100);
    line(60, 95, 70, 100);
}
