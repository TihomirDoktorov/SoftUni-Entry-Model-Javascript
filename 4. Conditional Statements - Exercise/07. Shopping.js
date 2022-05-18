function function1(input){
    let budget = Number(input[0])
    let videoCardNumber = Number(input[1]);
    let proccessorNumber = Number(input[2]);
    let ramNumber = Number(input[3]);
    let videoCardPrice = videoCardNumber*250;
    let proccessorPrice = proccessorNumber * (videoCardPrice*0.35);
    let ramPrice = ramNumber * (videoCardPrice*0.10);
    let price = videoCardPrice + proccessorPrice + ramPrice;
    if(videoCardNumber > proccessorNumber){
        price -= price*0.15;
    }
    if (budget >= price){
        console.log("You have "+(budget-price).toFixed(2)+" leva left!")
    }
    else console.log("Not enough money! You need "+(price-budget).toFixed(2)+" leva more!")
}
function1(["920.45","3","1","1"]);