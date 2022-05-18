function function1(input){
    let filmBudget = Number(input[0]);
    let statistsNumber = Number(input[1]);
    let clothesPrice = Number(input[2]);
    let decour = filmBudget*0.1;
    let clothes = statistsNumber * clothesPrice;
    if (statistsNumber>150){
        clothes-=clothes*0.1;
    }
    let sum = clothes + decour;
    if (sum>filmBudget){
        console.log("Not enough money!");
        console.log("Wingard needs "+(sum-filmBudget).toFixed(2)+" leva more.");
    }
    else if (sum<=filmBudget){
        console.log("Action!");
        console.log("Wingard starts filming with "+(filmBudget-sum).toFixed(2)+" leva left.");
    }
}
function1(["20000","120","55.5"]);