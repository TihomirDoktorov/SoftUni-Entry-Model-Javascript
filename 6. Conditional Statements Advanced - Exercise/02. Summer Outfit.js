function function1(input){
    let temp = Number(input[0]);
    let text = input[1];
    let outfit = 0;
    let shoes = 0;
    switch (text){
        case "Morning":
            if(temp>=10 && temp<=18){
                outfit = "Sweatshirt";
                shoes = "Sneakers"
                break;
            }
            else if (temp > 18 && temp <=24){
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            }
            else if (temp > 24){
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            }
        case "Afternoon":
            if(temp>=10 && temp<=18){
                outfit = "Shirt";
                shoes = "Moccasins"
                break;
            }
            else if (temp > 18 && temp <=24){
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            }
            else if (temp > 24){
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            }    
        case "Evening":
            if(temp>=10 && temp<=18){
                outfit = "Shirt";
                shoes = "Moccasins"
                break;
            }
            else if (temp > 18 && temp <=24){
                outfit = "Shirt";
                shoes = "Sandals";
                break;
            }
            else if (temp > 24){
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            } 
        default:
            console.log("error");
            break;
    }
    console.log("It's "+temp+" degrees, get your "+outfit+" and "+shoes+".");
}
function1(["16","Morning"]);