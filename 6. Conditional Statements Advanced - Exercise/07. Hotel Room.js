function function1(input){
    let month = input[0];
    let count = Number(input[1]);
    let apartment = 0;
    let studio = 0;
    switch (month){
        case "May":
        case "October":
            studio = count * 50;
            apartment = count * 65;
            if(count>7 && count<=14){
                studio-=studio*0.05;
                break;
            }
            else if(count>14){
                studio-=studio*0.3;
                break;
            }
            break;
        case "June":
        case "September":
            studio = count * 75.20;
            apartment = count * 68.70;
            if(count>14){
                studio-=studio*0.2;
                break;
            }
            break;
        case "July":
        case "August":
            studio = count * 76;
            apartment = count * 77;
            break;
        default:
            console.log("error");
            break;
    }
if(count>14){
    apartment-=apartment*0.1;
}
console.log(`Apartment: ${(apartment).toFixed(2)} lv.`);
console.log(`Studio: ${(studio).toFixed(2)} lv.`)
}
function1(["May","15"]);