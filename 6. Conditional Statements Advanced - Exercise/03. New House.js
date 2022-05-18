function function1(input){
    let type = input[0];
    let number = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    switch (type){
        case "Roses":
            price = number * 5;
            if(number > 80){
                price-=price*0.1;
            }
            break;
        case "Dahlias":
            price = number * 3.8;
            if(number > 90){
                price-=price*0.15;
            }
            break;
        case "Tulips":
            price = number * 2.8;
            if(number > 80){
                price-=price*0.15;
            }
            break;
        case "Narcissus":
            price = number * 3;
            if(number < 120 ){
                price+=price*0.15;
            }
            break;
        case "Gladiolus":
            price = number * 2.5;
            if(number < 80){
                price+=price*0.2;
            }
            break;
        default:
            console.log("error");
            break;
    }

    if(budget >= price){
        console.log(`Hey, you have a great garden with ${number} ${type} and ${(budget-price).toFixed(2)} leva left.`);
    }
    else if (price > budget){
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`);
    }
}
function1(["Roses","55","250"]);