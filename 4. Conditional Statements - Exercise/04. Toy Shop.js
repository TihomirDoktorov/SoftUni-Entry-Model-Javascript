function function1(input){
    let vacantionPrice = Number(input[0]);
    let puzzleNumber = Number(input[1]);
    let talkingdollNumber = Number(input[2]);
    let bearsNumber = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);
    let toys = puzzleNumber + talkingdollNumber + bearsNumber + minionsNumber + trucksNumber;
    let totalPrice = puzzleNumber*2.60 + talkingdollNumber*3 + bearsNumber*4.10 + minionsNumber*8.20 + trucksNumber*2
    if (toys > 49){
        totalPrice -= totalPrice*0.25;
    }
    totalPrice-=totalPrice*0.1
    if(vacantionPrice>totalPrice){
        console.log("Not enough money! "+(vacantionPrice-totalPrice).toFixed(2)+" lv needed.")
    }
    else {
        console.log("Yes! "+(totalPrice-vacantionPrice).toFixed(2)+" lv left.")
    }
}
function1(["40.8","20","25","30","50","10"])