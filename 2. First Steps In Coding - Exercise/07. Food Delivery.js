function function1(input){
    let chicken = Number(input[0])*10.35;
    let fish = Number(input[1])*12.40;
    let vegan = Number(input[2])*8.15;
    let sum = chicken + fish + vegan;
    let desert = sum * 0.2;
    console.log(sum+desert+2.50);
}
function1(["2","4","3"]);