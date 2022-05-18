function function1(input){
    let tax = Number(input[0]);
    let shoes = tax * 0.6;
    let squad = shoes * 0.8;
    let ball = squad/4;
    let accesories = ball/5;
    console.log(tax + shoes + squad + ball + accesories)
}
function1(["365"])