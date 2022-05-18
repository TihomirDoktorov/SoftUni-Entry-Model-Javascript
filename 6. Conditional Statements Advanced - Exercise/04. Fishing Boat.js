function function1(input){
    let budget = Number(input[0]);
    let season = input[1];
    let number = Number(input[2]);
    let price = 0;
    switch (season){
        case "Spring":
            price = 3000;
            if(number <= 6){
                price-=price*0.1;
                break;
            }
            else if (number >= 7 && number <= 11){
                price-=price*0.15;
                break;
            }
            else if (number >= 12){
                price-=price*0.25;
                break;
            }
        case "Summer":
        case "Autumn":
            price = 4200;
            if(number <= 6){
                price-=price*0.1;
                break;
            }
            else if (number >= 7 && number <= 11){
                price-=price*0.15;
                break;
            }
            else if (number >= 12){
                price-=price*0.25;
                break;
            }
        case "Winter":
            price = 2600;
            if(number <= 6){
                price-=price*0.1;
                break;
            }
            else if (number >= 7 && number <= 11){
                price-=price*0.15;
                break;
            }
            else if (number >= 12){
                price-=price*0.25;
                break;
            }
        default:
            console.log("error");
            break;
    }
if(season != "Autumn" && number%2==0){
    price-=price*0.05;
}
if(budget>=price){
    console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`);
}
else if (price > budget){
    console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`)
}

}
function1(["2000","Winter","13"]);