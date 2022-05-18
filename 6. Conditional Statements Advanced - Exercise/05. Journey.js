function function1(input){
    let budget = Number(input[0]);
    let season = input[1];
    let country = 0;
    let place = 0;
    switch (season){
        case "summer":
            if(budget<=100){
                country = "Bulgaria";
                budget = budget*0.3
                place = "Camp";
                break;
            }
            else if (budget>100 && budget <=1000){
                country = "Balkans";
                budget=budget*0.4;
                place = "Camp";
                break;
            }
            else if (budget>1000){
                country = "Europe";
                budget=budget*0.9;
                place = "Hotel";
                break;
            }
        case "winter":
            if(budget<=100){
                country = "Bulgaria";
                budget = budget*0.7
                place = "Hotel";
                break;
            }
            else if (budget>100 && budget <=1000){
                country = "Balkans";
                budget=budget*0.8;
                place = "Hotel";
                break;
            }
            else if (budget>1000){
                country = "Europe";
                budget=budget*0.9;
                place = "Hotel";
                break;
            }
    }
    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${(budget).toFixed(2)}`);
}
function1(["50","summer"]);