function function1(input) {
    let pencils = 5.80 * input[0];
    let markers = 7.20 * input[1];
    let litres = 1.20 * input[2];
    let percent = input[3]/100;
    let sum = pencils + markers + litres;

    console.log(sum - (sum * percent));
 }
 function1([2,3,4,25])