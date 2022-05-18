function function1(input){
    let product = input[0];
    let city = input[1];
    let quantity = input[2];
    switch (city){

        case "Sofia":
            if (product == "coffee"){
                console.log(quantity*0.5);
                break;
            }
            else if (product == "water"){
                console.log(quantity*0.8);
                break;
            }
            else if (product == "beer"){
                console.log(quantity*1.2);
                break;
            }
            else if (product == "sweets"){
                console.log(quantity*1.45);
                break;
            }
            else if (product == "peanuts"){
                console.log(quantity*1.60);
                break;
            }

        case "Plovdiv":
            if (product == "coffee"){
                console.log(quantity*0.4);
                break;
            }
            else if (product == "water"){
                console.log(quantity*0.7);
                break;
            }
            else if (product == "beer"){
                console.log(quantity*1.15);
                break;
            }
            else if (product == "sweets"){
                console.log(quantity*1.30);
                break;
            }
            else if (product == "peanuts"){
                console.log(quantity*1.50);
                break;
            }
        
        case "Varna":
            if (product == "coffee"){
                console.log(quantity*0.45);
                break;
            }
            else if (product == "water"){
                console.log(quantity*0.7);
                break;
            }
            else if (product == "beer"){
                console.log(quantity*1.10);
                break;
            }
            else if (product == "sweets"){
                console.log(quantity*1.35);
                break;
            }
            else if(product == "peanuts"){
                console.log(quantity*1.55);
                break;
            }
    }
}
function1(["coffee","Varna","2"]);