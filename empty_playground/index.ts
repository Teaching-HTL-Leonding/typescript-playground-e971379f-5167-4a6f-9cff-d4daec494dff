function setup() {
    createCanvas(400, 400);

    const meinText = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    let summe: number = 0;

    for (let i = 0; i < meinText.length; i++) {
        text(meinText[i], 1, (i + 1) * 10);

        let txt = meinText[i];
        let digits = "";
        for (let j = 0; j < txt.length; j++) {
            const myNumber = Number(txt.charAt(j));
            if (Number.isInteger(myNumber)) {
                digits += txt.charAt(j);
            }
        }
        if (digits.length > 2) {
            digits = digits.charAt(0) + digits.charAt(digits.length - 1);
        }
        if (digits.length < 2) {
            digits = digits + digits;
        }
        text(digits, 100, 10 * (i + 1));
        summe += Number(digits);
        
    }

    text(summe, 150, 50);
}

function draw() {
}
