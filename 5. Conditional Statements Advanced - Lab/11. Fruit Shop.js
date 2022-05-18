function function1(input){
    let product = input[0];
    let day = input[1];
    let quantity = input[2];

    switch (day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        if(product == "banana"){
            console.log((quantity*2.5).toFixed(2));
            break;
        }
        else if(product == "apple"){
            console.log((quantity*1.2).toFixed(2));
            break;
        }    
        else if(product == "orange"){
            console.log((quantity*0.85).toFixed(2));
            break;
        }
        else if(product == "grapefruit"){
            console.log((quantity*1.45).toFixed(2));
            break;
        }   
        else if(product == "kiwi"){
            console.log((quantity*2.7).toFixed(2));
            break;
        }
        else if(product == "pineapple"){
            console.log((quantity*5.5).toFixed(2));
            break;
        }
        else if(product == "grapes"){
            console.log((quantity*3.85).toFixed(2));
            break;
        }   
        case "Saturday":
        case "Sunday":
            if(product == "banana"){
                console.log((quantity*2.7).toFixed(2));
                break;
            }
            else if(product == "apple"){
                console.log((quantity*1.25).toFixed(2));
                break;
            }    
            else if(product == "orange"){
                console.log((quantity*0.90).toFixed(2));
                break;
            }
            else if(product == "grapefruit"){
                console.log((quantity*1.60).toFixed(2));
                break;
            }   
            else if(product == "kiwi"){
                console.log((quantity*3).toFixed(2));
                break;
            }
            else if(product == "pineapple"){
                console.log((quantity*5.6).toFixed(2));
                break;
            }
            else if(product == "grapes"){
                console.log((quantity*4.20).toFixed(2));
                break;
            }
        default:
            console.log("error");
            break;
    }
}