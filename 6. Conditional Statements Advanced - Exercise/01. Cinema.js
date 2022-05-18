function function1(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = columns * rows;
    if(type == "Premiere"){
        price = price * 12;
    }
    else if (type == "Normal"){
        price = price * 7.5;
    }
    else if (type == "Discount"){
        price = price * 5;
    }
    console.log((price).toFixed(2)+" leva");
}
function1(["Premiere","10","12"]);