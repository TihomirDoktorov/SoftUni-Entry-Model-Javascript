function function1(input) {
    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let sumNailon = (nailon + 2) * 1.50;
    let sumPaint = (paint + (paint * 0.1)) * 14.50;
    let sumRazreditel = razreditel * 5.00;
    let sum1 = sumNailon + sumPaint + sumRazreditel + 0.40;
    let sum2 = (sum1 * 0.3) * hours;
    let lastPrice = sum1 + sum2;

    console.log(lastPrice);
 }
 function1(["10","11","4","8"]);
 